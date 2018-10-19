<template>
    <div class="tabs">
        <el-tabs v-model="activeName2" type="border-card" @tab-click="handleClick">
            <el-tab-pane label="Article" name="article">
                <slot name="article">article slot</slot> 
            </el-tab-pane>
            <el-tab-pane label="Vocabulary" name="vocabulary">
                <slot name="vocabulary">Vocabulary slot</slot> 
            </el-tab-pane>
            <el-tab-pane label="Questions" name="questions">
                <slot name="questions">Questions</slot>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
export default{
    data(){
        return{
            activeName2: 'article'
        }
    },
    mounted () {
        let type = this.$route.params.type;
        this.activeName2 = type;
    },
    methods: {
        handleClick(tab, event) {
            let name = tab.name;
            this.$router.push({name: name+'Student', params:{id: this.$route.params.id, type: name}});
        }
    }
}
</script>
<style lang="scss">
    .tabs{
        width: 100%;
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