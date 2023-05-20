<template>
<div class="sidebar-menu">
        <div class="sidebar-header">
            <div class="logo">
                <router-link to="home"><img src="/assets/image/logo.png" alt="logo"></router-link>
            </div>
        </div>
        <div class="main-menu">
            <div class="menu-inner">
                <nav>
                    <!-- <ul class="metismenu" id="menu">
                        <li :class="(this.$route.path === '/home') ? 'active' : ''">
                            <router-link to="/home" aria-expanded="true"><i
                                    class="ti-dashboard"></i><span>dashboard</span></router-link>

                        </li>
                        <li :class="(this.$route.path === '/data-master') ? 'active' : ''">
                            <router-link to="/data-master" aria-expanded="true"><i class="ti-harddrives"></i><span>Data
                                    Master
                                </span></router-link>

                        </li>
                        <li :class="(this.$route.path === '/presensi') ? 'active' : ''">
                            <router-link to="/presensi" aria-expanded="true"><i
                                    class="ti-layout-list-thumb"></i><span>Presensi</span></router-link>

                        </li>
                        <li :class="(this.$route.path === '/hari-libur') ? 'active' : ''">
                            <router-link to="/hari-libur" aria-expanded="true"><i class="ti-calendar"></i><span>Hari
                                    Libur</span></router-link>

                        </li>
                        <li :class="(this.$route.path === '/laporan') ? 'active' : ''">
                            <router-link to="/laporan" aria-expanded="true"><i class="ti-notepad"></i><span>Laporan
                                    Harian</span></router-link>

                        </li>
                        <li :class="(this.$route.path === '/administrator') ? 'active' : ''">
                            <router-link to="/administrator" aria-expanded="true"><i
                                    class="ti-user"></i><span>Administrator</span></router-link>

                        </li>



                    </ul>
                    <ul class="metismenu2" id="menu">
                        <li>
                            <router-link to="/logout" @click="logout" aria-expanded="true"><i class="ti-power-off">

                                </i>
                                <span style="margin-left: 10px;">Keluar</span></router-link>

                        </li>
                    </ul> -->
                </nav>
            </div>
        </div>
    </div>
</template>