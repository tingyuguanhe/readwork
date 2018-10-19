<template>
        <div class="article_page">
            <div class="head">
                <article-head></article-head>
            </div>
            <div class="content article_wrap">
                <tabs>
                    <div slot="vocabulary">
                        vocabularykjgak;rgongojgklrjgl'arg
                    </div>
                </tabs>
            </div>
        </div>  
    </template>
    
    <script>
    import Tabs from '@/components/student_article_tabs'
    import articleHead from '@/components/article_head'
    
    export default{
        data(){
            return{
                activeName2: 'first'
            }
        },
        components:{Tabs,articleHead},
        methods: {
           
        }
    }
    </script>
    
    <style lang="scss">
    .article_page{
        .article_wrap{
            display: flex;
            justify-content: space-between;
        }
        .head{
            background: #f5f8f8;
            font-size: 22px;
            border: 2px solid #e4e7ed;
            text-align: left;
            color: #838a8e;
            font-size: 16px;
        }
       
        
    }
    </style>