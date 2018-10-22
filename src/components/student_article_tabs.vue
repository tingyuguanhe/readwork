<template>
    <div class="tabs">
        <el-tabs v-model="activeName2" type="border-card" @tab-click="handleClick">
            <el-tab-pane label="Article" name="article" class="article_content_tabs" :style="article_content_tabs" ref="article">
                <slot name="article">article slot</slot> 
            </el-tab-pane>
            <el-tab-pane label="Vocabulary" name="vocabulary" class="article_content_tabs" :style="article_content_tabs" ref="vocabulary">
                <slot name="vocabulary">Vocabulary slot</slot> 
            </el-tab-pane>
            <el-tab-pane label="Questions" name="questions" class="article_content_tabs" :style="article_content_tabs" ref="questions">
                <slot name="questions">Questions</slot>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>

export default{
    data(){
        return{
            activeName2: 'article',
            article_content_tabs:{
                "height": "300px",
                "overflow-y": "auto"
            },
            box:'',
            backTop: false
        }
    },
    props: ['scrollHeight'],
    mounted () {
        let type = this.$route.params.type;
        if(type == 'article'){
            this.box = document.getElementsByClassName('article_content_tabs')[0];
        }else if(type == 'vocabulary'){
            this.box = document.getElementsByClassName('article_content_tabs')[1];
        }else if(type == 'questions'){
            this.box = document.getElementsByClassName('article_content_tabs')[2];
        }
        this.box.addEventListener('scroll', this.handleScroll);

        this.activeName2 = type;
        this.article_content_tabs.height = window.innerHeight-300 + "px";

        window.addEventListener('resize', ()=>{
            // 变化后需要做的事
            if(window.innerHeight > 300){
                this.article_content_tabs.height = window.innerHeight-300 + "px";
            }
            
        })
    },
    watch: {
        'scrollHeight': function(newVal, oldVal){
            this.box.scrollTop = newVal;
        }
    },
    methods: {
        handleClick(tab, event) {
            let name = tab.name;
            this.$router.push({name: name+'Student', params:{id: this.$route.params.id, type: name}});
        },
        handleScroll () {
            var scrollTop = this.box.scrollTop;
            //console.log(scrollTop);
            if (scrollTop > 100) {
                this.backTop = true;
            } else {
                this.backTop = false;
            }
            this.$emit('isBackTop', this.backTop);
            this.$emit('scrollTop',  this.box.scrollTop);
        },
    }
}
</script>
<style lang="scss">
.tabs{
    width: 100%;
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item{
    font-size: 18px;
    color: #333;
}
.el-tabs--border-card{
    width: 100%;
    margin: 20px 0;
}
.el-tabs--border-card>.el-tabs__header{
    background: #f5f8f8;
    border-bottom: 1px solid #e4e7ed;
}
.el-tabs__item{
    height: 60px;
    line-height: 60px;
    padding: 0 30px;
}
</style>