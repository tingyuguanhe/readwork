<template>
    <div class="article_head">
        <div class="article_wrap">
            <div class="back" @click="goHistory">🔙Assignments</div>
            <ul>
                <li><span>字体</span></li>
                <li><span>段落</span></li>
                <li><span>高亮</span></li>
                <li><span>分屏</span></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default{
    methods: {
        goHistory(){
            this.$router.go(-1);
        }
    }
    
}
</script>

<style lang="scss">
    .article_head{
        .back{
            height: 70px;
            line-height: 70px;
            cursor: pointer;
        }
        ul{
            display: flex;
            justify-content: space-between;
            padding: 13px 0 0 0;
            li{
                margin: 0 5px;
                span{
                    cursor: pointer;
                    display: inline-block;
                    border: 1px solid #e4e7ed;
                    border-radius: 4px;
                    padding: 10px 15px;
                    background: #fff;
                    font-size: 14px;
                    &:hover{
                        background: #f85415;
                        color:#fff;
                        border-color: #f85415;
                    }
                }
                &:last-child{
                    margin-right: 0;
                }
            }
        }
    }

   
</style>
