<template>
        <div class="article_page">
            <div class="head">
                <article-head></article-head>
            </div>
            <div class="content article_wrap">
                <article-tabs @isBackTop="backTop" :scrollHeight="scrollTop" @scrollTop="getScrollTop">
                    <div slot="questions" class="questions_content">
                        <div class="questions_wrap">
                            <div class="title_tips">
                                <h3>There are 3 question sets assigned</h3>
                                <ul class="questions_link">
                                    <li><a href="#comprehension_questions">Comprehension Questions</a></li>
                                    <li><a href="#disease">Vocabulary: disease</a></li>
                                    <li><a href="#illness">Vocabulary: illness</a></li>
                                </ul>
                            </div>
                        </div>
                        <!-- Comprehension Questions -->
                        <div>
                            <a class="scroll-target" id="comprehension_questions"></a>
                            <h2>Comprehension Questions</h2>
                            <div class="head_tip">
                                <div class="questions_num"><span class="num">{{questionsDataList.length}}</span> questions</div>
                                <div class="subhead">
                                    Your work is automatically saved.
                                </div>
                            </div>
                            <div class="questions_list" v-for="(item,index) in questionsDataList" :key="index">
                               
                                <h3><span>{{index+1}}</span>{{item.title}}</h3>
                                <ul>
                                    <li v-for="(answer,indexIndex) in item.answersData" :key="indexIndex">
                                      
                                        <span v-if="indexIndex == 0" :class="{'answer_selected': answer.selected}" @click="answerNum(item,answer)">A</span>
                                        <span v-else-if="indexIndex == 1"  :class="{'answer_selected': answer.selected}" @click="answerNum(item,answer)">B</span>
                                        <span v-else-if="indexIndex == 2"  :class="{'answer_selected': answer.selected}" @click="answerNum(item,answer)">C</span>
                                        <span v-else="indexIndex == 3"  :class="{'answer_selected': answer.selected}" @click="answerNum(item,answer)">D</span>
                                        
                                        {{answer.answer}}
                                    </li>
                                </ul>

                            </div>
                        </div>
                        <!--     -->
                    </div>
                </article-tabs>
            </div>
            <div class="back_top" v-if="backToTop" @click="goBackTop">
                <span>返回顶部</span>
            </div>
        </div>  
    </template>
    
    <script>
    import articleTabs from '@/components/student_article_tabs'
    import articleHead from '@/components/article_head'
    import mixin from '@/views/mixins/mixin'

    export default{
        data(){
            return{
                activeName2: 'first',
                questionsDataList:[
                    {
                        id:1,
                        title: 'Thumbelina is travelling around the country and visiting children because',
                        answersData:[
                            {
                                id:1,
                                answer:'she is a dwarf for her breed and very small',
                                selected: false
                            },
                            {
                                id:2,
                                answer:'she lives on a farm in Missouri and likes to go to other places',
                                selected: false
                            },
                            {
                                id:3,
                                answer:'she is helping to raise money for sick children',
                                selected: false
                            },
                            {
                                id:4,
                                answer:'she is a friend of Ronald McDonald, who lives in San Diego',
                                selected: false
                            }

                        ]
                    },
                    {
                        id:2,
                        title: 'Thumbelina is travelling around the country and visiting children because',
                        answersData:[
                            {
                                id:1,
                                answer:'she is a dwarf for her breed and very small',
                                selected: false
                            },
                            {
                                id:2,
                                answer:'she lives on a farm in Missouri and likes to go to other places',
                                selected: false
                            },
                            {
                                id:3,
                                answer:'she is helping to raise money for sick children',
                                selected: false
                            },
                            {
                                id:4,
                                answer:'she is a friend of Ronald McDonald, who lives in San Diego',
                                selected: false
                            }

                        ]
                    },
                    {
                        id:3,
                        title: 'Thumbelina is travelling around the country and visiting children because',
                        answersData:[
                            {
                                id:1,
                                answer:'she is a dwarf for her breed and very small',
                                selected: false
                            },
                            {
                                id:2,
                                answer:'she lives on a farm in Missouri and likes to go to other places',
                                selected: false
                            },
                            {
                                id:3,
                                answer:'she is helping to raise money for sick children',
                                selected: false
                            },
                            {
                                id:4,
                                answer:'she is a friend of Ronald McDonald, who lives in San Diego',
                                selected: false
                            }

                        ]
                    },
                    {
                        id:4,
                        title: 'Thumbelina is travelling around the country and visiting children because',
                        answersData:[
                            {
                                id:1,
                                answer:'she is a dwarf for her breed and very small',
                                selected: false
                            },
                            {
                                id:2,
                                answer:'she lives on a farm in Missouri and likes to go to other places',
                                selected: false
                            },
                            {
                                id:3,
                                answer:'she is helping to raise money for sick children',
                                selected: false
                            },
                            {
                                id:4,
                                answer:'she is a friend of Ronald McDonald, who lives in San Diego',
                                selected: false
                            }

                        ]
                    }
                ],
                answerSelectNum: ''    
            }
        },
        components:{articleTabs,articleHead},
        mixins:[mixin],
        methods: {
            answerNum(item, answer){
                console.log(item);
                console.log(answer);
                _.map(item.answersData, child => {
                    child.selected = false;
                })
                answer.selected = !answer.selected;
            }   
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
        .questions_content{
            padding: 0 100px;
            text-align: left;
            padding: 0 220px;
            .title_tips{
                border: 1px solid #questions_num;
                border-radius: 5px;
                padding: 10px 20px;
                h3{
                    color:#838a8e;
                    margin-top: 10px;
                }
            }
            ul.questions_link{
                margin-left: 30px;
                li{
                    list-style: disc;
                    margin-bottom: 6px;
                    a{
                        text-decoration: none;
                    }
                }
            }
            .head_tip{
                display: flex;
                justify-content: space-between;
                color: #838a8e;
                .questions_num{
                    font-size: 24px;
                }
                .subhead{
                    font-size: 13px;
                }
            }
            .questions_list{
                margin-top: 45px;
                h3{
                    span{
                        display: inline-block;
                        height: 36px;
                        width: 36px;
                        background: #333;
                        color: #fff;
                        text-align: center;
                        line-height: 36px;
                        margin-right: 18px;
                        
                    }
                }
                ul{
                    li{
                        color:#838a8e;
                        font-size: 18px;
                        margin-bottom: 12px;
                        span{
                            display: inline-block;
                            width: 36px;
                            height: 36px;
                            font-size: 20px;
                            border-radius: 50%;
                            border: 1px solid #ccc;
                            text-align: center;
                            line-height: 36px;
                            margin-right: 18px;
                            cursor: pointer;
                            &.answer_selected{
                                background: #f85415;
                                color:#fff;
                                border-color: #f85415;
                            }
                        }
                    }
                }
            }
        }
        
       
        
    }
    </style>