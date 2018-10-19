<template>
    <div class="article_page">
        <div class="head">
            <article-head></article-head>
        </div>
        <div class="content article_wrap">
            <tabs>
                <div slot="article" class="nr_wrap">
                    <h1>a famous song</h1>
                    <h2>A famous song called the music heal your soul</h2>  
                    <div class="pic">
                        <img src="../../assets/imgs/pic.png" width="450">
                    </div>
                    <p>There is a famous song, which called let the music heal your soul. A lot of young people have their favorite singers. When they see their idols face to face, they would say thank you to the singers, because their songs inspire these young people to move on in the dark days. The songs deliver positive messages to the public and inspire them to never give up.</p>
                    <p>Listening to the music is the main way for the young people to release their pressure. Every day before I sleep, I will listen to the light music, which helps me to take relax and make me sleep well. The reason why so many people like to KTV after their work lies in releasing pressure. They need to shout and then forget about the annoyance. </p>
                    <p>Music is favored by everyone and it is the indispensable part of our life. </p>
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
   .nr_wrap{
       text-align: left;
        .pic{
            text-align: center;
            margin: 30px 0;
            img{
                padding: 15px;
                border: 1px solid #e4e7ed;
                background: #fdfdfd;
            }
        }
        
        p{
            font-size: 16px;
            line-height: 30px;
        }
   }

    
}
</style>