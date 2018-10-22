<template>
    <div class="student_page">
        <div class="title" :class="{'title_fixed':scrollFixed}"> 
            <div class="nr_wrap">
                <h1>Spicy Seafood Pasta</h1>
                <el-tabs v-model="activeIndex" @tab-click="handleClick">
                    <el-tab-pane label="Assignments To Do" name="0"></el-tab-pane>
                    <el-tab-pane label="Submitted Assignments" name="1"></el-tab-pane>
                </el-tabs>
            </div>
        </div>
        <div class="page_content">
            <div class="nr_wrap">
                <div class="nr_content">
                    <div v-if="activeIndex == 0">
                        <div class="pane_wrap">
                            <div class="head">
                                <div>Assignments To Do</div>
                                <div class="date">Due Date</div>
                            </div>
                        </div>
                        <ul class="article_list">
                            <li v-for="(item,index) in articleList" :key="index">
                                <div class="article_wrap" @click="viewArticle(item)">
                                    <img :src="item.img" alt="">
                                    <div class="article_content">
                                        <div class="article_title">{{item.title}}</div>
                                        <div class="has_audio" v-if="item.hasAudio">Includes Audio</div>
                                        <div class="study_status" v-if="!!item.study_status">
                                            <span :class="{'unfinished': item.study_status == 'unfinished', 'continue': item.study_status == 'continue'}">{{item.study_status}}</span>
                                        </div>
                                    </div> 
                                    <div class="date">
                                        {{item.date}}
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div v-if="activeIndex == 1">
                        <div class="pane_wrap">
                            <div class="head">
                                <div>Submitted Assignments</div>
                                <div class="date">Date Submitted</div>
                            </div>
                        </div>
                        <ul class="article_list">
                            <li v-for="(item,index) in submittedArticleList" :key="index">
                                <div class="article_wrap" @click="viewArticle(item)">
                                    <img :src="item.img" alt="">
                                    <div class="article_content">
                                        <div class="article_title">{{item.title}}</div>
                                        <div class="has_audio" v-if="item.hasAudio">Includes Audio</div>
                                        <div class="has_intro" v-if="!!item.intro">{{item.intro}}</div>
                                        <div class="study_result">
                                            <el-button type="primary">查看结果</el-button>
                                        </div>
                                    </div>
                                    <div class="date">
                                        {{item.date}}
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- 分页 -->
                <div class="page_block">
                    <el-pagination
                        @current-change="handleCurrentChange"
                        :current-page.sync="currentPage"
                        :page-size="10"
                        layout="total, pager, next, jumper"
                        :total="total">
                    </el-pagination>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default{
    data(){
        return{
            activeIndex: '0',
            tabs:[
                {
                    name:'Assignments To Do',
                },
                {
                    name:'Submitted Assignments'
                }
            ],
            articleList:[
                {
                    id:1,
                    title:'Should You Be Afraid of Sharks?',
                    date: '2018年10月12日',
                    study_status: '',
                    hasAudio: false,
                    img: require('../../assets/imgs/1.jpg')
                },
                {
                    id:2,
                    title:'Should You Be Afraid of Sharks?',
                    date: '2018年10月15日',
                    study_status: 'unfinished',
                    hasAudio: true,
                    img: require('../../assets/imgs/2.jpg')
                },
                {
                    id:3,
                    title:'Should You Be Afraid of Sharks?',
                    date: '2018年10月16日',
                    study_status: '',
                    hasAudio: false,
                    img: require('../../assets/imgs/3.jpg')
                },
                {
                    id:4,
                    title:'Should You Be Afraid of Sharks?',
                    date: '2018年10月20日',
                    study_status: '',
                    hasAudio: false,
                    img: require('../../assets/imgs/4.jpg')
                },
                {
                    id:5,
                    title:'Should You Be Afraid of Sharks?',
                    date: '2018年10月20日',
                    study_status: 'continue',
                    hasAudio: true,
                    img: require('../../assets/imgs/5.jpg')
                }
            ],
            submittedArticleList:[
                {
                    id:1,
                    title:'Should You Be Afraid of Sharks?',
                    date: '2018年10月12日',
                    intro:'ARTICLE-A-DAY SET',
                    hasAudio: false,
                    img: require('../../assets/imgs/3.jpg')
                },
                {
                    id:2,
                    title:'Should You Be Afraid of Sharks?',
                    date: '2018年10月15日',
                    intro:'',
                    hasAudio: true,
                    img: require('../../assets/imgs/1.jpg')
                },
                {
                    id:3,
                    title:'Should You Be Afraid of Sharks?',
                    date: '2018年10月20日',
                    intro:'',
                    hasAudio: true,
                    img: require('../../assets/imgs/4.jpg')
                }
            ],
            scrollFixed: false,
            currentPage: 4,
            total: 80

        }
    },
    mounted () {
        window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleClick(tab) {
            console.log(this.activeIndex);
            this.total = 30;
            this.currentPage = 1;
        },
        viewArticle(item){
            this.$router.push({name:'articleStudent', params:{id: item.id, type: 'article'}});
        },
        handleScroll () {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            // var offsetTop = document.querySelector('header').offsetTop;
            //console.log(offsetTop);
            if (scrollTop > 100) {
                this.scrollFixed = true;
            } else {
                this.scrollFixed = false;
            }
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        }
    }
}
</script>


<style lang="scss">
.student_page{
    h1{
        margin:0;
        padding: 0;
        height: 92px;
        line-height: 85px;
    }
    .title{
        height: 130px;
        background: #f5f8f8;
        font-size: 22px;
        border: 2px solid #e4e7ed;
        text-align: left;
        &.title_fixed{
            position: fixed;
            left: 0;
            top:0;
            width: 100%;
            z-index: 100;
        }
    }
    .page_content{
        margin:50px 0;
        .nr_content{
            margin-top: -40px;
        }
    }
    .el-tabs__active-bar{
        background-color: #f85415;
    }
    .el-tabs__item.is-active{
        color: #f85415;
    }
    .el-tabs__header{
        margin: 0;
    }
    .el-tabs__item{
        height: 40px;
        line-height: 36px;
        color: #838a8e;
        font-size: 16px;
    }
    .pane_wrap{
        .head{
            font-size: 26px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            color: #838a8e;
            border-bottom: 1px solid #dcdee0;
            padding: 24px 0;
        }
        .date{
            font-size: 16px;
            color: #838a8e;
        }
    }
    .article_list{
        li{
            display: flex;
            border-bottom: 1px solid #dcdee0;
            padding: 28px 0;
            .article_wrap{
                cursor: pointer;
                display: flex;
            }
            .date{
                font-size: 14px;
                color: #838a8e;
            }
            img{
                width: 120px;
                height: 100px;
            }
            .article_title{
                color: #f85415;
                font-size: 22px;
            }
            .has_audio,.has_intro{
                font-size: 14px;
                color: #ccc;
            }
            .article_content{
                width: 560px;
                padding: 0 25px;
                box-sizing: border-box;
                text-align: left;
            }
            .study_status{
                margin: 28px 0 0 0;
                color: #ccc;
                font-size: 14px;
                >span{
                    padding:5px 10px;
                    border: 1px solid #e4e7ed;
                    border-radius: 4px;
                } 
                .unfinished{
                    color: #fff;
                    border-color: #f00;
                    background: #f00;
                    &:hover{
                        cursor: pointer;
                    }
                }
                .continue{
                    color: #f85415;
                    border-color:#f85415;
                    &:hover{
                        cursor: pointer;
                    }
                }
            }
            .study_result{
                margin: 20px 0 0 0;
            }

            &:last-child{
                border-bottom: none;
            }
        }
    }
}
</style>