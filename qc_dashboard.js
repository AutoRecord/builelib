// ===== BEI QC Dashboard - Data & Charts =====
const DATA={
  byBT:{
    "事務所等":{ac:698,v:502,l:268,hw:220,ac_pct:41.3,v_pct:29.7,l_pct:15.9,hw_pct:13.0},
    "ホテル等":{ac:2903,v:613,l:613,hw:275,ac_pct:65.9,v_pct:13.9,l_pct:13.9,hw_pct:6.2},
    "病院等":{ac:1146,v:836,l:460,hw:281,ac_pct:42.1,v_pct:30.7,l_pct:16.9,hw_pct:10.3},
    "物販店舗等":{ac:890,v:833,l:415,hw:37,ac_pct:40.9,v_pct:38.3,l_pct:19.1,hw_pct:1.7},
    "学校等":{ac:702,v:293,l:208,hw:222,ac_pct:49.2,v_pct:20.5,l_pct:14.6,hw_pct:15.6},
    "飲食店等":{ac:612,v:735,l:370,hw:423,ac_pct:28.6,v_pct:34.3,l_pct:17.3,hw_pct:19.8},
    "集会所等":{ac:2383,v:507,l:409,hw:208,ac_pct:68.0,v_pct:14.5,l_pct:11.7,hw_pct:5.9},
    "共同住宅":{ac:324,v:586,l:324,hw:10,ac_pct:26.0,v_pct:47.1,l_pct:26.0,hw_pct:0.8}
  },
  byRegion:{
    "1地域":{ac:1060,v:0,l:498,hw:20},"2地域":{ac:1063,v:0,l:498,hw:20},
    "3地域":{ac:995,v:0,l:498,hw:19},"4地域":{ac:1018,v:0,l:498,hw:18},
    "5地域":{ac:1084,v:0,l:498,hw:17},"6地域":{ac:1173,v:0,l:498,hw:16},
    "7地域":{ac:1180,v:0,l:498,hw:14},"8地域":{ac:1478,v:0,l:498,hw:12}
  },
  allRooms:[
    {bt:"事務所等",rt:"事務室",ac:1173,v:0,l:498,hw:16},
    {bt:"事務所等",rt:"電子計算機器事務室",ac:1386,v:0,l:498,hw:16},
    {bt:"事務所等",rt:"会議室",ac:1246,v:0,l:231,hw:39},
    {bt:"事務所等",rt:"中央監視室",ac:3549,v:0,l:1171,hw:36},
    {bt:"事務所等",rt:"廊下",ac:790,v:0,l:245,hw:0},
    {bt:"事務所等",rt:"便所",ac:790,v:413,l:367,hw:0},
    {bt:"事務所等",rt:"喫煙室",ac:790,v:826,l:202,hw:0},
    {bt:"事務所等",rt:"厨房",ac:0,v:3514,l:322,hw:0},
    {bt:"事務所等",rt:"機械室",ac:0,v:769,l:10,hw:0},
    {bt:"事務所等",rt:"電気室",ac:0,v:1539,l:10,hw:0},
    {bt:"ホテル等",rt:"客室",ac:1144,v:0,l:308,hw:723},
    {bt:"ホテル等",rt:"宴会場",ac:7133,v:0,l:1282,hw:166},
    {bt:"ホテル等",rt:"フロント(終日)",ac:5458,v:0,l:1710,hw:0},
    {bt:"ホテル等",rt:"レストラン",ac:4926,v:0,l:556,hw:3003},
    {bt:"ホテル等",rt:"厨房",ac:0,v:5622,l:515,hw:0},
    {bt:"病院等",rt:"病室",ac:1824,v:0,l:514,hw:1422},
    {bt:"病院等",rt:"手術室",ac:1206,v:0,l:929,hw:315},
    {bt:"病院等",rt:"集中治療室",ac:4797,v:0,l:1394,hw:394},
    {bt:"病院等",rt:"診察室",ac:883,v:0,l:448,hw:165},
    {bt:"病院等",rt:"厨房",ac:0,v:9662,l:886,hw:0},
    {bt:"物販店舗等",rt:"大型店売場",ac:2169,v:0,l:931,hw:48},
    {bt:"物販店舗等",rt:"荷さばき場",ac:819,v:0,l:125,hw:24},
    {bt:"学校等",rt:"教室(小中)",ac:441,v:0,l:254,hw:0},
    {bt:"学校等",rt:"教室(大学)",ac:579,v:0,l:340,hw:0},
    {bt:"飲食店等",rt:"レストラン客室",ac:1596,v:0,l:493,hw:768},
    {bt:"飲食店等",rt:"厨房",ac:0,v:5093,l:466,hw:0},
    {bt:"集会所等",rt:"アリーナ",ac:3529,v:0,l:798,hw:24},
    {bt:"集会所等",rt:"映画館客席",ac:3687,v:625,l:1019,hw:119},
    {bt:"共同住宅",rt:"住戸",ac:324,v:586,l:324,hw:10}
  ],
  // 典型事務所ビル 3000m2 6地域
  officeModel:{ac:2295.5,v:454.3,l:943.1,hw:34.1,ev:80.0}
};
const COLORS={ac:'#6366f1',v:'#22d3ee',l:'#f472b6',hw:'#fb923c',ev:'#34d399'};
const LABELS={ac:'空調',v:'換気',l:'照明',hw:'給湯',ev:'昇降機'};

// ===== Navigation =====
(function(){
  const nav=document.getElementById('toolNav');
  const tools=['pareto','fishbone','check','histogram','scatter','control','stratify'];
  const names=['①パレート図','②特性要因図','③チェックシート','④ヒストグラム','⑤散布図','⑥管理図','⑦層別'];
  tools.forEach((t,i)=>{
    const a=document.createElement('a');a.href='#sec-'+t;a.textContent=names[i];nav.appendChild(a);
  });
})();

// ===== Chart.js Defaults =====
Chart.defaults.color='#94a3b8';
Chart.defaults.borderColor='rgba(255,255,255,.06)';
Chart.defaults.font.family="'Noto Sans JP',system-ui,sans-serif";

// ===== 1. Pareto Chart =====
(function(){
  const sel=document.getElementById('paretoSelect');
  Object.keys(DATA.byBT).forEach(bt=>{const o=document.createElement('option');o.value=bt;o.textContent=bt;sel.appendChild(o)});
  // Add "典型事務所ビル(3000m2)"
  const o2=document.createElement('option');o2.value='__office__';o2.textContent='典型的事務所ビル(3000m²)';sel.appendChild(o2);
  sel.value='事務所等';
  let chart=null;
  function render(bt){
    let items;
    if(bt==='__office__'){
      const m=DATA.officeModel;
      items=Object.entries(m).map(([k,v])=>({key:k,val:v,label:LABELS[k]}));
    }else{
      const d=DATA.byBT[bt];
      items=[{key:'ac',val:d.ac,label:'空調'},{key:'v',val:d.v,label:'換気'},{key:'l',val:d.l,label:'照明'},{key:'hw',val:d.hw,label:'給湯'}];
    }
    items.sort((a,b)=>b.val-a.val);
    const total=items.reduce((s,i)=>s+i.val,0);
    let cum=0;const cumPcts=items.map(i=>{cum+=i.val;return+(cum/total*100).toFixed(1)});
    if(chart)chart.destroy();
    chart=new Chart(document.getElementById('paretoChart'),{
      data:{
        labels:items.map(i=>i.label),
        datasets:[
          {type:'bar',label:'基準値 [MJ/m²年]',data:items.map(i=>i.val),
           backgroundColor:items.map(i=>COLORS[i.key]+'cc'),borderColor:items.map(i=>COLORS[i.key]),
           borderWidth:2,borderRadius:8,yAxisID:'y',order:2},
          {type:'line',label:'累積比率 [%]',data:cumPcts,
           borderColor:'#fbbf24',backgroundColor:'#fbbf2433',pointBackgroundColor:'#fbbf24',
           pointRadius:6,pointHoverRadius:9,borderWidth:3,tension:.3,yAxisID:'y1',order:1}
        ]
      },
      options:{
        responsive:true,maintainAspectRatio:false,
        plugins:{
          legend:{position:'top',labels:{usePointStyle:true,padding:16}},
          tooltip:{callbacks:{
            afterBody(ctx){
              if(ctx[0].datasetIndex===0){
                const pct=(ctx[0].raw/total*100).toFixed(1);
                return `寄与度: ${pct}%\n累積: ${cumPcts[ctx[0].dataIndex]}%`;
              }
            }
          }}
        },
        scales:{
          y:{beginAtZero:true,title:{display:true,text:'基準値 [MJ/m²年]'},grid:{color:'rgba(255,255,255,.04)'}},
          y1:{position:'right',min:0,max:100,title:{display:true,text:'累積比率 [%]'},grid:{drawOnChartArea:false},
            ticks:{callback:v=>v+'%'}}
        }
      }
    });
    // Insight
    const top=items[0];const topPct=(top.val/total*100).toFixed(1);
    const top2Sum=((items[0].val+items[1].val)/total*100).toFixed(1);
    document.getElementById('paretoInsight').innerHTML=
      `💡 <strong>${top.label}</strong>が全体の<strong>${topPct}%</strong>を占め、最大の寄与要因。`+
      ` 上位2設備で<strong>${top2Sum}%</strong>をカバー。`+
      `<br>→ <span class="tag-must">★★★必須</span>: ${items.filter((_,i)=>cumPcts[i]<=80||i===0).map(i=>i.label).join(', ')} `+
      `/ <span class="tag-skip">☆間引可</span>: ${items.filter((_,i)=>(i.val/total*100)<5).map(i=>i.label).join(', ')||'なし'}`;
  }
  sel.addEventListener('change',()=>render(sel.value));
  render('事務所等');
})();

// ===== 2. Fishbone (Ishikawa) =====
(function(){
  const svg=document.getElementById('fishboneSvg');
  const W=1200,H=600,MID=H/2;
  const causes=[
    {label:'空調 (60%)',color:COLORS.ac,x:180,subs:['地域区分','外皮U/I値','熱源機種・COP','ファン制御','ポンプ制御','蓄熱の有無']},
    {label:'照明 (25%)',color:COLORS.l,x:420,subs:['定格消費電力','在室検知','明るさ検知','タイムスケジュール','初期照度補正','室指数']},
    {label:'換気 (12%)',color:COLORS.v,x:660,subs:['消費電力/出力','高効率電動機','インバータ','送風量制御','台数']},
    {label:'昇降機 (2%)',color:COLORS.ev,x:860,subs:['速度制御方式','積載量','速度']},
    {label:'給湯 (1%)',color:COLORS.hw,x:1000,subs:['節湯器具','配管保温','太陽熱']}
  ];
  // Spine
  let html=`<line x1="60" y1="${MID}" x2="1160" y2="${MID}" stroke="#475569" stroke-width="4"/>`;
  // Head (effect)
  html+=`<polygon points="1160,${MID-30} 1200,${MID} 1160,${MID+30}" fill="#ef4444"/>`;
  html+=`<text x="1100" y="${MID-40}" fill="#fca5a5" font-size="15" font-weight="700" text-anchor="middle">BEI &gt; 1.0</text>`;
  html+=`<text x="1100" y="${MID-22}" fill="#94a3b8" font-size="11" text-anchor="middle">（基準超過）</text>`;

  causes.forEach((c,ci)=>{
    const up=ci%2===0;const sign=up?-1:1;
    const y2=MID+sign*160;
    // Main branch
    html+=`<line x1="${c.x}" y1="${MID}" x2="${c.x+60}" y2="${y2}" stroke="${c.color}" stroke-width="3" opacity=".8"/>`;
    html+=`<text x="${c.x+65}" y="${y2+sign*18}" fill="${c.color}" font-size="13" font-weight="700">${c.label}</text>`;
    // Sub-causes
    c.subs.forEach((s,si)=>{
      const ratio=0.2+si*0.15;
      const bx=c.x+ratio*(60);
      const by=MID+sign*(ratio*160);
      const sx=bx+(up?-70:70);const sy=by+sign*(20+si*17);
      html+=`<line x1="${bx}" y1="${by}" x2="${sx}" y2="${sy}" stroke="${c.color}" stroke-width="1.5" opacity=".5"/>`;
      html+=`<text x="${sx+(up?-4:4)}" y="${sy+sign*4}" fill="#cbd5e1" font-size="10" text-anchor="${up?'end':'start'}">${s}</text>`;
    });
  });
  // Shared factors (bottom)
  html+=`<text x="60" y="${H-20}" fill="#64748b" font-size="10">共通因子: Region(地域区分), buildingType×roomType, roomArea, F_PRIME(一次エネ換算係数)</text>`;
  svg.innerHTML=html;
})();

// ===== 3. Check Sheet =====
(function(){
  const tbl=document.getElementById('checkTable');
  const bts=Object.keys(DATA.byBT);
  const systems=[
    {name:'空調パラメータ全般',key:'ac',threshold:[20,10,3]},
    {name:'換気パラメータ全般',key:'v',threshold:[20,10,3]},
    {name:'照明パラメータ全般',key:'l',threshold:[20,10,3]},
    {name:'給湯パラメータ全般',key:'hw',threshold:[20,10,3]},
    {name:'昇降機(概算2%)',key:'ev',fixed:2.1}
  ];
  let h='<thead><tr><th>パラメータ群</th>';
  bts.forEach(bt=>h+=`<th>${bt}</th>`);
  h+='</tr></thead><tbody>';
  systems.forEach(sys=>{
    h+=`<tr><td>${sys.name}</td>`;
    bts.forEach(bt=>{
      const d=DATA.byBT[bt];
      let pct=sys.fixed||d[sys.key+'_pct']||0;
      let cls,txt;
      if(pct>=20){cls='lv-must';txt=`★★★ ${pct.toFixed(1)}%`;}
      else if(pct>=10){cls='lv-imp';txt=`★★☆ ${pct.toFixed(1)}%`;}
      else if(pct>=3){cls='lv-low';txt=`★☆☆ ${pct.toFixed(1)}%`;}
      else{cls='lv-skip';txt=`☆☆☆ ${pct.toFixed(1)}%`;}
      h+=`<td class="${cls}">${txt}</td>`;
    });
    h+='</tr>';
  });
  // Add detailed sub-parameters
  const subParams=[
    {name:'→ 外皮性能(U値/I値)',parent:'ac'},{name:'→ 熱源機種・COP',parent:'ac'},
    {name:'→ ファン/ポンプ制御',parent:'ac'},{name:'→ 全熱交換器',parent:'ac'},
    {name:'→ 在室検知制御',parent:'l'},{name:'→ 明るさ検知制御',parent:'l'},
    {name:'→ 高効率電動機',parent:'v'},{name:'→ インバータ制御',parent:'v'},
    {name:'→ 節湯器具',parent:'hw'},{name:'→ 配管保温仕様',parent:'hw'}
  ];
  subParams.forEach(sp=>{
    h+=`<tr><td style="padding-left:1.5rem;font-size:.75rem;color:#64748b">${sp.name}</td>`;
    bts.forEach(bt=>{
      const parentPct=DATA.byBT[bt][sp.parent+'_pct']||0;
      let cls,txt;
      if(parentPct>=20){cls='lv-must';txt='精査';}
      else if(parentPct>=10){cls='lv-imp';txt='確認';}
      else if(parentPct>=3){cls='lv-low';txt='概算';}
      else{cls='lv-skip';txt='省略可';}
      h+=`<td class="${cls}" style="font-size:.75rem">${txt}</td>`;
    });
    h+='</tr>';
  });
  h+='</tbody>';
  tbl.innerHTML=h;
})();

// ===== 4. Histogram =====
(function(){
  const rooms=DATA.allRooms;
  const totals=rooms.map(r=>r.ac+r.v+r.l+r.hw);
  const bins=[0,500,1000,1500,2000,3000,4000,5000,7000,10000,15000];
  const counts=new Array(bins.length).fill(0);
  totals.forEach(t=>{
    for(let i=bins.length-1;i>=0;i--){if(t>=bins[i]){counts[i]++;break;}}
  });
  const labels=bins.map((b,i)=>i<bins.length-1?`${b}-${bins[i+1]}`:`${b}+`);
  new Chart(document.getElementById('histogramChart'),{
    type:'bar',
    data:{labels,datasets:[{
      label:'室用途数',data:counts,
      backgroundColor:counts.map((_,i)=>{
        const ratio=i/bins.length;
        return ratio<.3?'#22c55eaa':ratio<.6?'#eab308aa':'#ef4444aa';
      }),
      borderColor:counts.map((_,i)=>{
        const ratio=i/bins.length;
        return ratio<.3?'#22c55e':ratio<.6?'#eab308':'#ef4444';
      }),
      borderWidth:2,borderRadius:6
    }]},
    options:{
      responsive:true,maintainAspectRatio:false,
      plugins:{legend:{display:false},
        title:{display:true,text:'全室用途の基準一次エネルギー消費量分布 [MJ/m²年]（6地域）',font:{size:14}}},
      scales:{
        x:{title:{display:true,text:'基準一次エネルギー消費量 [MJ/m²年]'}},
        y:{beginAtZero:true,title:{display:true,text:'室用途数'},ticks:{stepSize:1}}
      }
    }
  });
})();

// ===== 5. Scatter =====
(function(){
  const rooms=DATA.allRooms;
  const btColors={"事務所等":"#6366f1","ホテル等":"#22d3ee","病院等":"#f472b6",
    "物販店舗等":"#fb923c","学校等":"#34d399","飲食店等":"#a78bfa","集会所等":"#f87171","共同住宅":"#38bdf8"};
  const datasets={};
  rooms.forEach(r=>{
    if(!datasets[r.bt])datasets[r.bt]={label:r.bt,data:[],backgroundColor:btColors[r.bt]||'#888',
      pointRadius:7,pointHoverRadius:11,pointStyle:'circle'};
    datasets[r.bt].data.push({x:r.ac,y:r.v,label:r.rt});
  });
  new Chart(document.getElementById('scatterChart'),{
    type:'scatter',
    data:{datasets:Object.values(datasets)},
    options:{
      responsive:true,maintainAspectRatio:false,
      plugins:{
        legend:{position:'right',labels:{usePointStyle:true,padding:10,font:{size:11}}},
        title:{display:true,text:'空調基準値 vs 換気基準値（室用途別）',font:{size:14}},
        tooltip:{callbacks:{
          label(ctx){const d=ctx.raw;return `${ctx.dataset.label}: ${d.label||''} (AC=${d.x}, V=${d.y})`;}
        }}
      },
      scales:{
        x:{title:{display:true,text:'空調 [MJ/m²年]'},beginAtZero:true},
        y:{title:{display:true,text:'換気 [MJ/m²年]'},beginAtZero:true}
      }
    }
  });
})();

// ===== 6. Control Chart =====
(function(){
  const sel=document.getElementById('controlSelect');
  Object.keys(DATA.byBT).forEach(bt=>{const o=document.createElement('option');o.value=bt;o.textContent=bt;sel.appendChild(o)});
  sel.value='事務所等';
  let chart=null;
  function render(bt){
    // Use regional data for 事務所等, otherwise simulate
    const regions=['1地域','2地域','3地域','4地域','5地域','6地域','7地域','8地域'];
    let vals;
    if(bt==='事務所等'){vals=regions.map(r=>DATA.byRegion[r].ac);}
    else{
      const base=DATA.byBT[bt].ac;
      vals=[base*0.85,base*0.86,base*0.82,base*0.88,base*0.92,base,base*1.01,base*1.2];
      vals=vals.map(v=>Math.round(v));
    }
    const mean=vals.reduce((a,b)=>a+b)/vals.length;
    const std=Math.sqrt(vals.reduce((s,v)=>s+(v-mean)**2,0)/vals.length);
    const ucl=mean+2*std,lcl=Math.max(0,mean-2*std);
    if(chart)chart.destroy();
    chart=new Chart(document.getElementById('controlChart'),{
      type:'line',
      data:{
        labels:regions,
        datasets:[
          {label:'空調基準値',data:vals,borderColor:'#6366f1',backgroundColor:'#6366f133',
           pointBackgroundColor:vals.map(v=>v>ucl||v<lcl?'#ef4444':'#6366f1'),
           pointRadius:vals.map(v=>v>ucl||v<lcl?10:6),pointBorderColor:vals.map(v=>v>ucl||v<lcl?'#ef4444':'#6366f1'),
           borderWidth:3,tension:.2,fill:false},
          {label:`平均 (${Math.round(mean)})`,data:Array(8).fill(mean),borderColor:'#fbbf24',borderWidth:2,borderDash:[8,4],pointRadius:0,fill:false},
          {label:`UCL+2σ (${Math.round(ucl)})`,data:Array(8).fill(ucl),borderColor:'#ef4444',borderWidth:1.5,borderDash:[4,4],pointRadius:0,fill:false},
          {label:`LCL-2σ (${Math.round(lcl)})`,data:Array(8).fill(lcl),borderColor:'#ef4444',borderWidth:1.5,borderDash:[4,4],pointRadius:0,
           fill:{target:'-1',above:'rgba(239,68,68,.05)'}}
        ]
      },
      options:{
        responsive:true,maintainAspectRatio:false,
        plugins:{
          legend:{position:'top',labels:{usePointStyle:true,padding:14}},
          title:{display:true,text:`${bt} - 空調基準値の地域別管理図`,font:{size:14}}
        },
        scales:{
          y:{title:{display:true,text:'空調基準値 [MJ/m²年]'},
            grid:{color:'rgba(255,255,255,.04)'}}
        }
      }
    });
  }
  sel.addEventListener('change',()=>render(sel.value));
  render('事務所等');
})();

// ===== 7. Stratification =====
(function(){
  const bts=Object.keys(DATA.byBT);
  const ds=['ac','v','l','hw'].map(k=>({
    label:LABELS[k],data:bts.map(bt=>DATA.byBT[bt][k+'_pct']),
    backgroundColor:COLORS[k]+'cc',borderColor:COLORS[k],borderWidth:2,borderRadius:4
  }));
  new Chart(document.getElementById('stratifyChart'),{
    type:'bar',
    data:{labels:bts,datasets:ds},
    options:{
      responsive:true,maintainAspectRatio:false,
      plugins:{
        legend:{position:'top',labels:{usePointStyle:true,padding:14}},
        title:{display:true,text:'建物用途別 設備エネルギー構成比 [%]（6地域・層別分析）',font:{size:14}},
        tooltip:{callbacks:{label(ctx){return `${ctx.dataset.label}: ${ctx.raw}%`;}}}
      },
      scales:{
        x:{stacked:true,grid:{display:false}},
        y:{stacked:true,max:100,title:{display:true,text:'構成比 [%]'},ticks:{callback:v=>v+'%'}}
      }
    }
  });
  // Insight
  const acDom=bts.filter(bt=>DATA.byBT[bt].ac_pct>=50);
  const vDom=bts.filter(bt=>DATA.byBT[bt].v_pct>=30);
  document.getElementById('stratifyInsight').innerHTML=
    `💡 <strong>層別分析の結論:</strong><br>`+
    `・空調支配型（AC≥50%）: <span class="tag-must">${acDom.join(', ')}</span> → 外皮・熱源パラメータの精度が最重要<br>`+
    `・換気重視型（V≥30%）: <span class="tag-imp">${vDom.join(', ')}</span> → ファン消費電力・制御方式の確認が必要<br>`+
    `・全用途共通: 照明は常に10-26%を占めるため、制御方式4種は全建物で確認すべき`;
})();
