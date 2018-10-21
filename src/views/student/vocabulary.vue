<template>
        <div class="article_page">
            <div class="head">
                <article-head></article-head>
            </div>
            <div class="content article_wrap">
                <article-tabs @isBackTop="backTop" :scrollHeight="scrollTop" @scrollTop="getScrollTop">
                    <div slot="vocabulary" class="vocabulary_content">
                        <div class="ope_btns">
                            <el-radio v-model="radio7" label="disease" border @change="selectOpe">DISEASE</el-radio>
                            <el-radio v-model="radio7" label="illness" border @change="selectOpe">ILLNESS</el-radio>
                        </div>
                        <!-- disease -->
                        <div class="vocabulary_wrap" v-if="radio7 == 'disease'">
                            <div class="head_tip">
                                <span class="name">disease</span>
                                <span>dis .ease</span>
                            </div>
                            <ul class="links">
                                <li><a href="#definition">Definition</a></li>
                                <li><a href="#advanced_definition">Advanced Definition</a></li>
                                <li><a href="#examples">Examples</a></li>
                            </ul>
                            <div class="content">
                                <div>
                                    <a class="scroll-target" id="definition"></a>
                                    <h3>Definition</h3>
                                    <div>
                                        <h4>noun</h4>
                                        <ol>
                                            <li>
                                                <div>a condition that causes harm to a person's health.</div> 
                                                <blockquote>Many diseases are caused by germs.</blockquote>
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                                <div>
                                    <a class="scroll-target" id="advanced_definition"></a>
                                    <h3>Advanced Definition</h3>
                                    <div>
                                        <h4>noun</h4>
                                        <ol>
                                            <li>
                                                <div>ondition that causes harm to a ondition that causes harm to a ondition that causes harm to a a condition that causes harm to a person's health.</div> 
                                                <blockquote>It can take months to recover from this disease.</blockquote>
                                                <blockquote>Many diseases are caused by germs.</blockquote>
                                                <blockquote>Many diseases are caused by germs.</blockquote>
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                                <!--  -->
                                <div class="examples">
                                    <a class="scroll-target" id="examples"></a>
                                    <h3>These are some examples of how the word or forms of the word are used:</h3>
                                    <ol>
                                        <li>
                                            <span>Eating apples has been shown to lower the risk of cancer, stroke, and heart </span>
                                            <strong>disease</strong>
                                        </li>
                                        <li>
                                            <span>Spiders eat mosquitoes and other insects that harm farmers' crops and carry <strong>disease</strong></span>
                                        </li>
                                        <li>
                                            <span>Kimberly's brother has a </span>
                                            <strong>disease</strong>
                                            <span>, or an illness, called cancer. He has to stay at a hospital in San Diego.</span>
                                        </li>
                                        <li>
                                            <strong>Disease</strong>
                                            <span> swept through the population. Out of the 214 settlers who were alive when Captain Smith left, only 60 had survived.</span>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <!-- illness -->
                        <div class="vocabulary_wrap" v-if="radio7 == 'illness'">
                            <div class="head_tip">
                                <span class="name">illness</span>
                                <span>ill .ness</span>    
                            </div>
                        </div>
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
                radio7:'disease',
              
            }
        },
        components:{articleTabs,articleHead},
        mixins:[mixin],
        methods: {
            selectOpe(){
                console.log(this.radio7);
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
       
        .vocabulary_content{
            padding: 0 100px;
            text-align: left;
            padding: 0 220px;
            .ope_btns{
                margin: 30px 0;
            }
            .vocabulary_wrap{
                .head_tip{
                    font-size: 32px;
                    .name{
                        font-weight: 700;
                    }
                    >span:last-child{
                        color: #90969a;
                        margin-left: 50px;
                    }
                }
                ul.links{
                    margin: 30px 0;
                    border-top: 1px solid #ccc;
                    border-bottom: 1px solid #ccc;
                    padding: 12px 0;
                    li{
                        margin-bottom: 6px;
                        a{
                            text-decoration: none;
                        }
                        >div{
                            line-height: 28px;
                        }
                        
                    }
                }
                ol{
                    li{
                        line-height: 32px;
                        margin-bottom: 10px;
                    }
                }
                .examples{
                    border-top: 1px solid #ccc;
                    margin: 50px 0 0 0;
                }
                blockquote{
                    color:#90969a;
                    font-style:italic;
                }
                
            }
        }
        .el-radio__input.is-checked .el-radio__inner,.el-radio__input{
            display: none;
        }
        .el-radio.is-bordered.is-checked{
            background: #344048;
            border-color: #344048;
            color: #fff;
            font-weight: 600;
        }
        .el-radio__input.is-checked+.el-radio__label{
            color: #fff;
            font-size: 16px;
        }
        .el-radio__label{
            font-size: 16px;
            font-weight: 600;
        }
        .el-radio.is-bordered{
            border-radius: 30px;
        }
        
        
    }
    </style>