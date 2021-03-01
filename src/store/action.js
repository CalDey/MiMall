// action提交commit->调用mutations
export default {
    saveUserName(context,username) {
        context.commit('saveUserName',username)
    },
    saveCartCount(context,cartCount) {
        context.commit('saveCartCount',cartCount)
    }
}