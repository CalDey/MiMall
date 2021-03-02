<template>
    <div>
        <div class="ali-pay" v-if="loading">
            <loading></loading>
            <div class="form" v-html="content"></div>
        </div>
    </div>
</template>
<script>
import Loading from './../components/Loading'
import { setTimeout } from 'timers';
export default {
    name: 'ali-pay',
    components: {
        Loading
    },
    data() {
        return {
            orderId: this.$route.query.orderId,
            content: '',
            loading: true,  // loading动画
        }
    },
    mounted() {
        this.paySubmit()
    },
    methods: {
        paySubmit() {
            this.axios.post('/pay',{
                orderId: this.orderId,
                // 订单名称
                orderName: 'Vue 仿小米商城',
                // 金额
                amount: 0.01,
                payType: 1
            }).then((res) => {
                this.content = res.content;
                setTimeout(() => {
                    document.forms[0].submit();
                }, 100)
            })
        }
    }
}
</script>