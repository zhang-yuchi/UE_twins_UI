new Vue({
    el:"#app",
    mounted(){

    },
    data(){
        return {
            isStationOpen:false,
            isHyStationOpen:false,
            isPlay:false,
            stationList:[
                {
                    name:"水津关电站",
                    doorTotal:18,

                }
            ],
            procLocStyle:{
                left:"-10px",
                // left:"690px"
            },
            processingTimer:null,
            readyProcessing:false,
            proBase:-10
        }
    },
    methods:{
        closeStationWindow(){
            this.readyProcessing = false
            this.isStationOpen = false
        },
        openStationWindow(){
            this.readyProcessing = false
            this.isStationOpen = true
        },
        closeHyStationWindow(){
            this.readyProcessing = false
            this.isHyStationOpen = false
        },
        openHyStationWindow(){
            this.readyProcessing = false
            this.isHyStationOpen = true
        },
        openProcessing(){
            this.readyProcessing = true
        },
        playModel(){
            //模拟总时长： 700px / (1*10) = 70s

            this.isPlay = true
            let that = this
            //游标移动
            this.processingTimer = setInterval(()=>{
                that.proBase+=1
                if(that.proBase >= 690){
                    that.proBase = 690;
                    clearInterval(that.processingTimer)
                    that.processingTimer = null
                }
                that.procLocStyle = {
                    left:that.proBase+"px"
                }
            },100)
            
        },
        stopModel(){
            this.isPlay = false
            clearInterval(this.processingTimer)
            that.processingTimer = null
        }
    }
})