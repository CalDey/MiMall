<template>
    <div class="header">
        <!-- 顶部栏 -->
        <div class="nav-topbar">
            <div class="container">
                <div class="topbar-menu">
                    <a href="javascript:;">小米商城</a>
                    <a href="javascript:;">MUI</a>
                    <a href="javascript:;">云服务</a>
                    <a href="javascript:;">协议规则</a>
                </div>
                <div class="topbar-user">
                    <a href="javascript:;" v-if="username">{{username}}</a>
                    <a href="javascript:;" v-if="!username" @click="login">登录</a>
                    <a href="javascript:;" v-if="username" @click="logout">退出</a>
                    <a href="/#/order/list">我的订单</a>
                    <a href="javascript:;" class="my-cart" @click="goToCart">
                        <span class="icon-cart"></span>
                        购物车({{cartCount}})
                    </a>                    
                </div>
            </div>
        </div>
        <!-- 头部导航 -->
        <div class="nav-header">
            <div class="container">
                <div class="header-logo">
                    <a href="/#/index"></a>
                </div>
                <div class="header-menu">
                    <div class="item-menu">
                        <span>小米手机</span>
                        <div class="children">
                            <ul>
                                <li class="product" v-for="(item, index) in phoneList" :key="index">
                                    <a :href="'/#/product/' + item.id" target="_blink">
                                        <div class="pro-img">
                                            <img v-lazy="item.mainImage" :alt="item.subtitle">
                                        </div>
                                        <div class="pro-name">{{item.name}}</div>
                                        <div class="pro-price">{{item.price | currency}}</div>
                                    </a>
                                </li>                                                                                                
                            </ul>
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>RedMi红米</span>
                        <!-- <div class="children"></div> -->
                    </div>
                    <div class="item-menu">
                        <span>电视</span>
                        <div class="children">
                            <ul>
                                <li class="product">
                                    <a href="" target="_blink">
                                        <div class="pro-img">
                                            <img v-lazy="'/imgs/nav-img/nav-3-1.jpg'" alt="">
                                        </div>
                                        <div class="pro-name">小米壁画电视 65英寸</div>
                                        <div class="pro-price">6999元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blink">
                                        <div class="pro-img">
                                            <img v-lazy="'/imgs/nav-img/nav-3-2.jpg'" alt="">
                                        </div>
                                        <div class="pro-name">小米全面屏电视电视 E55A</div>
                                        <div class="pro-price">1999元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blink">
                                        <div class="pro-img">
                                            <img v-lazy="'/imgs/nav-img/nav-3-3.png'" alt="">
                                        </div>
                                        <div class="pro-name">小米电视4A 32英寸</div>
                                        <div class="pro-price">699元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blink">
                                        <div class="pro-img">
                                            <img v-lazy="'/imgs/nav-img/nav-3-4.jpg'" alt="">
                                        </div>
                                        <div class="pro-name">小米电视5A 55英寸</div>
                                        <div class="pro-price">1799元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blink">
                                        <div class="pro-img">
                                            <img v-lazy="'/imgs/nav-img/nav-3-5.jpg'" alt="">
                                        </div>
                                        <div class="pro-name">小米电视4A 65英寸</div>
                                        <div class="pro-price">2699元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blink">
                                        <div class="pro-img">
                                            <img v-lazy="'/imgs/nav-img/nav-3-6.png'" alt="">
                                        </div>
                                        <div class="pro-name">查看全部</div>
                                        <div class="pro-price">查看全部</div>
                                    </a>
                                </li>                                                                                                
                            </ul>                            
                        </div>
                    </div>                                        
                </div>
                <div class="header-search">
                    <div class="wrapper">
                        <input type="text" name="keyword">
                        <a href="javascript:;"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name: 'nav-header',
    data () {
        return {
            phoneList: []
        }
    },
    computed: {
        // 通过计算属性获取username属性
        // username() {
        //     return this.$store.state.username;
        // },
        // cartCount() {
        //     return this.$store.state.cartCount;
        // }
        ...mapState(['username', 'cartCount'])
    },
    // 过滤器
    filters: {
        currency(val) {
            if (!val) return '0.00';
            return '￥' + val.toFixed(2) + '元';
        }
    },
    mounted () {
        this.getProductList();
        // 判断只有登录页面跳转首页才执行，防止资源浪费
        let params = this.$route.params;
        if (params && params.from === 'login') {
            this.getCartCount();
        }
    },
    methods: {
        login() {
            this.$router.push('/login')
        },
        // 退出后重新登录再次请求购物车数量
        getCartCount() {
        this.axios.get('/carts/products/sum').then((res) => {
            this.$store.dispatch('saveCartCount', res)
        })
        },
        // 退出
        logout() {
            this.axios.post('/user/logout').then(() => {
                this.$message.success('退出成功');
                this.$cookie.set('userId', '', {expires:'-1'});
                // 清空用户
                this.$store.dispatch('saveUserName', '');
                // 清空购物车
                this.$store.dispatch('saveCartCount', '0');
            })            
        },
        getProductList() {
            this.axios.get('/products', {
                params: {
                    categoryId: '100012',
                    pageSize: 6
                }
            }).then((res) => {
                // res.list;
                // if (res.list.length >= 6) {
                //     this.phoneList = res.list.slice(0, 6);
                // }
                this.phoneList = res.list;
            })
        },
        goToCart() {
            this.$router.push('/cart')
        }
    }
}
</script>

<style lang="scss">
    @import './../assets/scss/base.scss';
    @import './../assets/scss/mixin.scss';
    @import './../assets/scss/config.scss';
    .header {
        .nav-topbar {
            height: 39px;
            line-height: 39px;
            background-color: #333333;
            color: #B0B0B0;
            .container {
                @include flex();
                a {
                    display: inline-block;
                    color: #B0B0B0;
                    margin-right: 17px;
                }
                .my-cart {
                    width: 110px;
                    background-color: #FF6600;
                    text-align: center;
                    color: #ffffff;
                    margin-right: 0;
                    .icon-cart {
                        @include bgImg(16px,12px,'/imgs/icon-cart-checked.png');
                        margin-right: 4px;
                        }
                    }
            }
        }
        .nav-header {
            .container {
                position: relative;
                height: 112px;
                @include flex();
                // .header-logo {
                    // display: inline-block;
                    // width: 55px;
                    // height: 55px;
                    // background: #FF6600;
                    // a {
                    //     display: inline-block;
                    //     width: 110px;
                    //     height: 55px;
                    //     &:before {
                    //         content: '';
                    //         display: inline-block;
                    //         @include bgImg(55px,55px,'/imgs/mi-logo.png');
                    //         transition: margin .2s
                    //     }
                    //     &:after {
                    //         content: '';
                    //         display: inline-block;
                    //         @include bgImg(55px,55px,'/imgs/mi-home.png');
                    //     }
                    //     &:hover:before{
                    //         margin-left: -55px;
                    //         // 动画
                    //         transition: margin .2s
                    //     }                        
                    // }
                // }
                .header-menu {
                    display: inline-block;
                    width: 643px;
                    padding-left: 209px;
                    .item-menu {
                        display: inline-block;
                        color: #333333;
                        font-weight: bold;
                        font-size: 16px;
                        line-height: 112px;
                        margin-left: 20px;
                        span {
                            cursor: pointer;
                        }
                        &:hover{
                            color: $colorA;
                            .children {
                                height: 220px;
                                opacity: 1;
                            }
                        }
                        .children {
                            position: absolute;
                            top: 112px;
                            left: 0;
                            width: 1226px;
                            height: 0;
                            opacity: 0;
                            overflow: hidden;
                            border-top: 1px solid #E5E5E5;
                            box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, .11);
                            z-index: 10;
                            transition: all .5s;
                            background-color: #ffffff;
                            .product {
                                position: relative;
                                float: left;
                                width: 16.6%;
                                height: 220px;
                                font-size: 12px;
                                line-height: 12px;
                                text-align: center;
                                a {
                                    display: inline-block;
                                }
                                img {
                                    width: auto;
                                    height: 111px;
                                    margin-top: 26px;
                                }
                                .pro-img {
                                    width: 137px;
                                }
                                .pro-name {
                                    font-weight: bold;
                                    margin-top: 19px;
                                    margin-bottom: 8px;
                                    color: $colorB;
                                }
                                .pro-price {
                                    color: $colorA;
                                }
                                &:before {
                                content: '';
                                position: absolute;
                                top: 28px;
                                right: 0;
                                border-left: 1px solid $colorF;
                                height: 100px;
                                width: 1px;
                                }
                                &:last-child:before{
                                    display: none
                                }
                            }
                        }
                    }
                }
                .header-search {
                    width: 319px;
                    .wrapper {
                        height: 50px;
                        border: 1px solid #E0E0E0;
                        display: flex;
                        align-items: center;
                        input {
                            border: none;
                            box-sizing: border-box;
                            border-right: 1px solid #E0E0E0;
                            width: 264px;
                            height: 50px;
                            padding-left: 14px;
                        }
                        a {
                            display: inline-block;
                            @include bgImg(18px,18px,'/imgs/icon-search.png');
                            margin-left: 17px;
                        }
                    }
                }
            }
        }
    }
</style>


