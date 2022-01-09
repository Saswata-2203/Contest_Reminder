fetch('https://codeforces.com/api/contest.list?gym=false')
    .then(data=>data.json())
    .then(needdata=> {
        var stop=0;
        while(needdata.result[stop].phase!='FINISHED')
        {
            stop++;
        }
        stop--;
        const contest_name=needdata.result[stop].name;
        const contest_name_element=document.getElementById('contest_name');
        contest_name_element.innerHTML=contest_name;
        var contest_timeleft=needdata.result[stop].relativeTimeSeconds;
        contest_timeleft=-contest_timeleft
        var hours = Math.floor(contest_timeleft / 3600);
        contest_timeleft %= 3600;
        var minutes = Math.floor(contest_timeleft / 60);
        var seconds = contest_timeleft % 60;
        var timeleft=hours+" Hours "+minutes+" Minutes "+seconds+" Seconds"
        const contest_timeleft_element=document.getElementById('contest_time_left');
        contest_timeleft_element.innerHTML=timeleft;
    })