
import { config } from '../../../config/config';
import axios from 'axios';
import { getDataIsLogin, flashMessage } from '../../../config/functions';

const base_url = config.base_url;
export default {
    data() {
        return {
            isLoading: false,
            isFilter: false,
            presensies: null,
            token: null,
            detailPresensiUser: null,
            mounthFrom: '',
            mounthTo: '',
            sortBy: 'terbaru'
        }
    },

    async mounted() {
        this.isLoading = true;
        const date = new Date();
        this.mounthFrom = `${date.getFullYear()}-0${date.getMonth() + 1}`
        this.mounthTo = `${date.getFullYear()}-0${date.getMonth() + 1}`
        const yearAndMount = this.mounthFrom.split('-');
        const year = yearAndMount[0];
        const mounth = yearAndMount[1].replace('0', '');

        const dataAllPresensi = await this.fetchData(year, mounth)
        this.presensies = dataAllPresensi.sort((a, b) => new Date(b.date) - new Date(a.date))
    },

    methods: {
        async fetchData(year, mounth) {
            try {
                if (getDataIsLogin()) {
                    this.token = getDataIsLogin().token
                    const response = await axios.get(`${base_url}/attendance/get-attendances?inputTahun=${year}&inputBulan=${mounth}`, {
                        headers: {
                            'Authorization': `Bearer ${this.token}`
                        }
                    })
                    const result = await response.data;
                    const dataResult = result.data
                    return dataResult;
                }

            } catch (error) {
                flashMessage('error', 'Gagal', error)
            } finally {
                this.isLoading = false

            }
        },
        detailPresensi(id) {
            // simpan pengguna yang terpilih ke state aplikasi
            const id_detail = this.presensies.find(x => x.id == id)
            this.detailPresensiUser = id_detail;
            this.$router.push({ name: 'detail-presensi', params: {data: JSON.stringify(this.detailPresensiUser)} })
            // navigasi ke halaman "Edit User"
            //   this.$router.push('/edit-user');
        },

        async getDataByFilter() {
            this.presensies = '';
            this.isLoading = true;
            try {
                const yearAndMount = this.mounthFrom.split('-');
                const year = yearAndMount[0];
                const mounth = yearAndMount[1].replace('0', '');
                const getDataByFilter = await this.fetchData(year, mounth);
                if (this.sortBy === 'terbaru') {
                    this.presensies = getDataByFilter.sort((a, b) => new Date(b.date) - new Date(a.date))
                } else {
                    this.presensies = getDataByFilter.sort((a, b) => new Date(a.date) - new Date(b.date))
                }
            } catch (error) {
                flashMessage('error', 'Gagal', error)
            }
            this.isFilter = true
        },

        refresh(){
            window.location.reload()
        }
    }
}
