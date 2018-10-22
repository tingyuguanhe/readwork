export default{
    data(){
        return{
            backToTop: false,
            scrollTop: 0
        }
    },
    methods: {
        backTop(flag){
            this.backToTop = flag;
        },
        goBackTop(){
            this.scrollTop = 0;
        },
        getScrollTop(h){
            this.scrollTop = h;
        },
        
    }
}