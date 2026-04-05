// ===== BEI QC Dashboard v2 — Data =====
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
    {bt:"事務所等",rt:"事務室",ac:1173,v:0,l:498,hw:16},{bt:"事務所等",rt:"電子計算機器事務室",ac:1386,v:0,l:498,hw:16},
    {bt:"事務所等",rt:"会議室",ac:1246,v:0,l:231,hw:39},{bt:"事務所等",rt:"中央監視室",ac:3549,v:0,l:1171,hw:36},
    {bt:"事務所等",rt:"廊下",ac:790,v:0,l:245,hw:0},{bt:"事務所等",rt:"便所",ac:790,v:413,l:367,hw:0},
    {bt:"事務所等",rt:"喫煙室",ac:790,v:826,l:202,hw:0},{bt:"事務所等",rt:"厨房",ac:0,v:3514,l:322,hw:0},
    {bt:"事務所等",rt:"機械室",ac:0,v:769,l:10,hw:0},{bt:"事務所等",rt:"電気室",ac:0,v:1539,l:10,hw:0},
    {bt:"ホテル等",rt:"客室",ac:1144,v:0,l:308,hw:723},{bt:"ホテル等",rt:"宴会場",ac:7133,v:0,l:1282,hw:166},
    {bt:"ホテル等",rt:"フロント(終日)",ac:5458,v:0,l:1710,hw:0},{bt:"ホテル等",rt:"レストラン",ac:4926,v:0,l:556,hw:3003},
    {bt:"ホテル等",rt:"厨房",ac:0,v:5622,l:515,hw:0},
    {bt:"病院等",rt:"病室",ac:1824,v:0,l:514,hw:1422},{bt:"病院等",rt:"手術室",ac:1206,v:0,l:929,hw:315},
    {bt:"病院等",rt:"集中治療室",ac:4797,v:0,l:1394,hw:394},{bt:"病院等",rt:"診察室",ac:883,v:0,l:448,hw:165},
    {bt:"病院等",rt:"厨房",ac:0,v:9662,l:886,hw:0},
    {bt:"物販店舗等",rt:"大型店売場",ac:2169,v:0,l:931,hw:48},{bt:"物販店舗等",rt:"荷さばき場",ac:819,v:0,l:125,hw:24},
    {bt:"学校等",rt:"教室(小中)",ac:441,v:0,l:254,hw:0},{bt:"学校等",rt:"教室(大学)",ac:579,v:0,l:340,hw:0},
    {bt:"飲食店等",rt:"レストラン客室",ac:1596,v:0,l:493,hw:768},{bt:"飲食店等",rt:"厨房",ac:0,v:5093,l:466,hw:0},
    {bt:"集会所等",rt:"アリーナ",ac:3529,v:0,l:798,hw:24},{bt:"集会所等",rt:"映画館客席",ac:3687,v:625,l:1019,hw:119},
    {bt:"共同住宅",rt:"住戸",ac:324,v:586,l:324,hw:10}
  ],
  officeModel:{ac:2295.5,v:454.3,l:943.1,hw:34.1,ev:80.0}
};
const C={ac:'#818cf8',v:'#2dd4bf',l:'#f472b6',hw:'#fb923c',ev:'#4ade80'};
const LBL={ac:'空調',v:'換気',l:'照明',hw:'給湯',ev:'昇降機'};

// ===== Nav =====
(function(){
  const nav=document.getElementById('toolNav');
  const ids=['pareto','fishbone','check','histogram','scatter','control','stratify'];
  const nm=['①パレート図','②特性要因図','③チェックシート','④ヒストグラム','⑤散布図','⑥管理図','⑦層別'];
  ids.forEach((id,i)=>{const a=document.createElement('a');a.href='#sec-'+id;a.textContent=nm[i];a.dataset.sec=id;nav.appendChild(a)});
  // Scroll spy
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting){
      nav.querySelectorAll('a').forEach(a=>a.classList.toggle('active',a.dataset.sec===e.target.id.replace('sec-','')));
    }});
  },{threshold:.3,rootMargin:'-120px 0px -40% 0px'});
  ids.forEach(id=>obs.observe(document.getElementById('sec-'+id)));
})();

// ===== KPI =====
(function(){
  const m=DATA.officeModel;const total=Object.values(m).reduce((a,b)=>a+b);
  const kpis=[
    {label:'空調 寄与度',value:(m.ac/total*100).toFixed(1)+'%',color:C.ac,pct:m.ac/total*100},
    {label:'照明 寄与度',value:(m.l/total*100).toFixed(1)+'%',color:C.l,pct:m.l/total*100},
    {label:'換気 寄与度',value:(m.v/total*100).toFixed(1)+'%',color:C.v,pct:m.v/total*100},
    {label:'給湯+昇降機',value:((m.hw+m.ev)/total*100).toFixed(1)+'%',color:C.hw,pct:(m.hw+m.ev)/total*100},
    {label:'合計基準値',value:(total/1000).toFixed(1)+' GJ/年',color:'#a78bfa',pct:100}
  ];
  const row=document.getElementById('kpiRow');
  kpis.forEach(k=>{
    const d=document.createElement('div');d.className='kpi';
    d.innerHTML=`<div class="kpi-value" style="color:${k.color}">${k.value}</div>
      <div class="kpi-label">${k.label}</div>
      <div class="kpi-bar"><div class="kpi-bar-fill" style="width:${k.pct}%;background:${k.color}"></div></div>`;
    row.appendChild(d);
  });
})();

// ===== Chart.js Defaults =====
Chart.defaults.color='#6b7294';Chart.defaults.borderColor='rgba(255,255,255,.04)';
Chart.defaults.font.family="'Inter','Noto Sans JP',system-ui,sans-serif";
Chart.defaults.font.size=12;

// ===== 1. Pareto =====
(function(){
  const sel=document.getElementById('paretoSelect');
  Object.keys(DATA.byBT).forEach(bt=>{const o=document.createElement('option');o.value=bt;o.textContent=bt;sel.appendChild(o)});
  const o2=document.createElement('option');o2.value='__office__';o2.textContent='⭐ 典型的事務所ビル(3000m²)';sel.appendChild(o2);
  sel.value='__office__';let chart=null;
  function render(bt){
    let items;
    if(bt==='__office__'){
      const m=DATA.officeModel;items=Object.entries(m).map(([k,v])=>({key:k,val:v,label:LBL[k]}));
    }else{
      const d=DATA.byBT[bt];items=['ac','v','l','hw'].map(k=>({key:k,val:d[k],label:LBL[k]}));
    }
    items.sort((a,b)=>b.val-a.val);const total=items.reduce((s,i)=>s+i.val,0);
    let cum=0;const cumP=items.map(i=>{cum+=i.val;return+(cum/total*100).toFixed(1)});
    const ctx=document.getElementById('paretoChart').getContext('2d');
    if(chart)chart.destroy();
    // Gradient fills
    const grads=items.map(i=>{const g=ctx.createLinearGradient(0,0,0,400);
      g.addColorStop(0,C[i.key]+'ee');g.addColorStop(1,C[i.key]+'33');return g;});
    chart=new Chart(ctx,{
      data:{labels:items.map(i=>i.label),datasets:[
        {type:'bar',label:'基準値',data:items.map(i=>+i.val.toFixed(0)),backgroundColor:grads,
         borderColor:items.map(i=>C[i.key]),borderWidth:2,borderRadius:10,yAxisID:'y',order:2,
         hoverBorderWidth:3},
        {type:'line',label:'累積比率',data:cumP,borderColor:'#fbbf24',backgroundColor:'rgba(251,191,36,.08)',
         pointBackgroundColor:'#fbbf24',pointBorderColor:'#1a1a2e',pointBorderWidth:2,
         pointRadius:7,pointHoverRadius:10,borderWidth:3,tension:.35,yAxisID:'y1',order:1,fill:true}
      ]},
      options:{responsive:true,maintainAspectRatio:false,
        interaction:{mode:'index',intersect:false},
        plugins:{legend:{position:'top',labels:{usePointStyle:true,padding:20,font:{size:11}}},
          tooltip:{backgroundColor:'rgba(10,14,30,.9)',titleFont:{size:13,weight:700},bodyFont:{size:12},
            padding:14,cornerRadius:10,borderColor:'rgba(255,255,255,.1)',borderWidth:1,
            callbacks:{afterBody(ctx){if(ctx[0].datasetIndex===0){
              return `寄与度: ${(ctx[0].raw/total*100).toFixed(1)}%\n累積: ${cumP[ctx[0].dataIndex]}%`}}}
          }
        },
        scales:{
          y:{beginAtZero:true,title:{display:true,text:bt==='__office__'?'基準値 [GJ/年]':'基準値 [MJ/m²年]',font:{size:11}},
            grid:{color:'rgba(255,255,255,.03)'},ticks:{font:{size:10}}},
          y1:{position:'right',min:0,max:100,title:{display:true,text:'累積比率 [%]',font:{size:11}},
            grid:{drawOnChartArea:false},ticks:{callback:v=>v+'%',font:{size:10}}}
        }
      }
    });
    // 80% line annotation via plugin
    const top80=items.filter((_,i)=>i===0||cumP[i-1]<80).map(i=>i.label);
    const topPct=(items[0].val/total*100).toFixed(1);
    document.getElementById('paretoInsight').innerHTML=
      `💡 <strong>${items[0].label}</strong>が全体の<strong>${topPct}%</strong>を占め最大の寄与要因。`+
      `80%ラインまでの設備: <span class="tag-must">${top80.join(' → ')}</span><br>`+
      `→ 簡易計算で<span class="tag-skip">省略可能</span>: ${items.filter(i=>(i.val/total*100)<5).map(i=>i.label).join(', ')||'なし'}`;
  }
  sel.addEventListener('change',()=>render(sel.value));render('__office__');
})();

// ===== 2. Fishbone (completely redesigned) =====
(function(){
  const svg=document.getElementById('fishboneSvg');
  const W=1200,H=650,MID=H/2+10;
  const causes=[
    {label:'空調',pct:'60%',color:C.ac,glow:'rgba(129,140,248,.3)',weight:5,
     subs:['地域区分','外皮U値/I値','熱源機種','COP/効率','ファン制御','ポンプ制御','蓄熱方式','外気冷房']},
    {label:'照明',pct:'25%',color:C.l,glow:'rgba(244,114,182,.2)',weight:3.5,
     subs:['定格消費電力','在室検知','明るさ検知','タイムスケジュール','初期照度補正','室指数']},
    {label:'換気',pct:'12%',color:C.v,glow:'rgba(45,212,191,.2)',weight:2.5,
     subs:['消費電力/出力','高効率電動機','インバータ','送風量制御','台数']},
    {label:'昇降機',pct:'2%',color:C.ev,glow:'rgba(74,222,128,.15)',weight:1.5,
     subs:['速度制御方式','積載量','速度']},
    {label:'給湯',pct:'1%',color:C.hw,glow:'rgba(251,146,60,.15)',weight:1.2,
     subs:['節湯器具','配管保温','太陽熱']}
  ];
  // Branch positions — alternating up/down, spread across the spine
  const branchX=[160,380,600,820,980];
  let html='';
  // Glow filter
  html+=`<defs>
    <filter id="glow"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <linearGradient id="spineGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#334155"/><stop offset="50%" stop-color="#64748b"/><stop offset="100%" stop-color="#475569"/>
    </linearGradient>
  </defs>`;
  // Spine
  html+=`<line x1="60" y1="${MID}" x2="1130" y2="${MID}" stroke="url(#spineGrad)" stroke-width="5" stroke-linecap="round"/>`;
  // Arrow head
  html+=`<polygon points="1130,${MID-22} 1180,${MID} 1130,${MID+22}" fill="#f87171" filter="url(#glow)"/>`;
  // Effect label
  html+=`<text x="1095" y="${MID-38}" fill="#fca5a5" font-size="16" font-weight="800" text-anchor="middle">BEI &gt; 1.0</text>`;
  html+=`<text x="1095" y="${MID-20}" fill="#94a3b8" font-size="10" text-anchor="middle">基準超過</text>`;

  causes.forEach((c,ci)=>{
    const up=ci%2===0;const sign=up?-1:1;
    const bx=branchX[ci];const by2=MID+sign*200;
    // Main branch line
    html+=`<line x1="${bx}" y1="${MID}" x2="${bx+50}" y2="${by2}" stroke="${c.color}" stroke-width="${c.weight}" stroke-linecap="round" opacity=".7" filter="url(#glow)"/>`;
    // Junction circle
    html+=`<circle cx="${bx}" cy="${MID}" r="${c.weight+2}" fill="${c.color}" opacity=".4"/>`;
    // Label box
    const lx=bx+55,ly=by2+sign*8;
    html+=`<rect x="${lx-5}" y="${ly-16}" width="${(c.label.length+c.pct.length+1)*10+16}" height="26" rx="8" fill="${c.color}22" stroke="${c.color}" stroke-width="1" opacity=".6"/>`;
    html+=`<text x="${lx+4}" y="${ly+2}" fill="${c.color}" font-size="13" font-weight="800">${c.label}</text>`;
    html+=`<text x="${lx+(c.label.length)*13+8}" y="${ly+2}" fill="${c.color}" font-size="11" font-weight="400" opacity=".7">${c.pct}</text>`;
    // Sub-cause bones
    c.subs.forEach((s,si)=>{
      const t=(si+1)/(c.subs.length+1);
      const sx=bx+t*50;const sy=MID+sign*t*200;
      const endX=sx+(up?-90:90);const endY=sy+sign*(-15-si*2);
      html+=`<line x1="${sx}" y1="${sy}" x2="${endX}" y2="${endY}" stroke="${c.color}" stroke-width="1.2" opacity=".35"/>`;
      html+=`<circle cx="${endX}" cy="${endY}" r="2.5" fill="${c.color}" opacity=".5"/>`;
      html+=`<text x="${endX+(up?-6:6)}" y="${endY+3}" fill="#cbd5e1" font-size="10.5" font-weight="400" text-anchor="${up?'end':'start'}">${s}</text>`;
    });
  });
  // Shared factors line at bottom
  html+=`<line x1="80" y1="${H-40}" x2="1100" y2="${H-40}" stroke="#334155" stroke-width="1" stroke-dasharray="4 4"/>`;
  html+=`<text x="${W/2}" y="${H-22}" fill="#64748b" font-size="10.5" text-anchor="middle" font-weight="500">共通因子: Region（地域区分）/ buildingType × roomType / roomArea / F_PRIME（一次エネ換算係数）</text>`;
  svg.innerHTML=html;
})();

// ===== 3. Check Sheet =====
(function(){
  const tbl=document.getElementById('checkTable');const bts=Object.keys(DATA.byBT);
  const systems=[
    {name:'空調パラメータ全般',key:'ac'},{name:'換気パラメータ全般',key:'v'},
    {name:'照明パラメータ全般',key:'l'},{name:'給湯パラメータ全般',key:'hw'},
    {name:'昇降機（概算 2%）',key:'ev',fixed:2.1}
  ];
  const subParams=[
    {name:'外皮性能（U値/I値）',parent:'ac',icon:'🧱'},
    {name:'熱源機種・COP',parent:'ac',icon:'🔥'},
    {name:'ファン/ポンプ制御',parent:'ac',icon:'🌀'},
    {name:'全熱交換器',parent:'ac',icon:'♻️'},
    {name:'在室検知制御',parent:'l',icon:'👁'},
    {name:'明るさ検知制御',parent:'l',icon:'☀️'},
    {name:'高効率電動機',parent:'v',icon:'⚡'},
    {name:'インバータ制御',parent:'v',icon:'📊'},
    {name:'節湯器具',parent:'hw',icon:'🚿'},
    {name:'配管保温仕様',parent:'hw',icon:'🧤'}
  ];
  function lvl(pct){
    if(pct>=20) return {cls:'lv-must',txt:`★★★ ${pct.toFixed(1)}%`};
    if(pct>=10) return {cls:'lv-imp',txt:`★★☆ ${pct.toFixed(1)}%`};
    if(pct>=3)  return {cls:'lv-low',txt:`★☆☆ ${pct.toFixed(1)}%`};
    return {cls:'lv-skip',txt:`— ${pct.toFixed(1)}%`};
  }
  function subLvl(pct){
    if(pct>=20) return {cls:'lv-must',txt:'精査'};
    if(pct>=10) return {cls:'lv-imp',txt:'確認'};
    if(pct>=3)  return {cls:'lv-low',txt:'概算'};
    return {cls:'lv-skip',txt:'省略可'};
  }
  let h='<thead><tr><th>パラメータ群</th>';
  bts.forEach(bt=>h+=`<th>${bt}</th>`);h+='</tr></thead><tbody>';
  systems.forEach(sys=>{
    h+=`<tr><td><span class="badge badge-${sys.key}" style="margin-right:.4rem">${LBL[sys.key]||'EV'}</span>${sys.name}</td>`;
    bts.forEach(bt=>{
      const pct=sys.fixed||(DATA.byBT[bt][sys.key+'_pct']||0);const l=lvl(pct);
      h+=`<td class="${l.cls}">${l.txt}</td>`;
    });h+='</tr>';
    // Sub-params for this system
    subParams.filter(sp=>sp.parent===sys.key).forEach(sp=>{
      h+=`<tr class="sub-row"><td>${sp.icon} ${sp.name}</td>`;
      bts.forEach(bt=>{
        const pct=DATA.byBT[bt][sp.parent+'_pct']||0;const l=subLvl(pct);
        h+=`<td class="${l.cls}">${l.txt}</td>`;
      });h+='</tr>';
    });
  });
  h+='</tbody>';tbl.innerHTML=h;
})();

// ===== 4. Histogram =====
(function(){
  const totals=DATA.allRooms.map(r=>r.ac+r.v+r.l+r.hw);
  const bins=[0,500,1000,1500,2000,3000,4000,5000,7000,10000,15000];
  const counts=new Array(bins.length).fill(0);
  totals.forEach(t=>{for(let i=bins.length-1;i>=0;i--){if(t>=bins[i]){counts[i]++;break;}}});
  const labels=bins.map((b,i)=>i<bins.length-1?`${b}–${bins[i+1]}`:`${b}+`);
  const ctx=document.getElementById('histogramChart').getContext('2d');
  const colors=counts.map((_,i)=>{const r=i/(bins.length-1);return r<.35?'#4ade80':r<.65?'#fbbf24':'#f87171'});
  const grads=colors.map((clr,i)=>{const g=ctx.createLinearGradient(0,0,0,400);g.addColorStop(0,clr+'dd');g.addColorStop(1,clr+'22');return g});
  new Chart(ctx,{type:'bar',
    data:{labels,datasets:[{label:'室用途数',data:counts,backgroundColor:grads,
      borderColor:colors,borderWidth:2,borderRadius:8,hoverBorderWidth:3}]},
    options:{responsive:true,maintainAspectRatio:false,
      plugins:{legend:{display:false},
        title:{display:true,text:'全室用途の基準一次エネルギー消費量分布 [MJ/m²年]（6地域）',
          font:{size:14,weight:600},color:'#d1d5e8',padding:{bottom:16}},
        tooltip:{backgroundColor:'rgba(10,14,30,.92)',cornerRadius:10,padding:12}
      },
      scales:{
        x:{title:{display:true,text:'基準一次エネ消費量 [MJ/m²年]',font:{size:11}},grid:{display:false}},
        y:{beginAtZero:true,title:{display:true,text:'室用途数',font:{size:11}},ticks:{stepSize:1},grid:{color:'rgba(255,255,255,.03)'}}
      }
    }
  });
})();

// ===== 5. Scatter =====
(function(){
  const btC={"事務所等":"#818cf8","ホテル等":"#2dd4bf","病院等":"#f472b6","物販店舗等":"#fb923c",
    "学校等":"#4ade80","飲食店等":"#a78bfa","集会所等":"#f87171","共同住宅":"#38bdf8"};
  const datasets={};
  DATA.allRooms.forEach(r=>{
    if(!datasets[r.bt])datasets[r.bt]={label:r.bt,data:[],backgroundColor:btC[r.bt]||'#888',
      borderColor:btC[r.bt]+'88',borderWidth:1.5,pointRadius:8,pointHoverRadius:13,pointStyle:'circle'};
    datasets[r.bt].data.push({x:r.ac,y:r.v,label:r.rt});
  });
  new Chart(document.getElementById('scatterChart'),{type:'scatter',
    data:{datasets:Object.values(datasets)},
    options:{responsive:true,maintainAspectRatio:false,
      plugins:{
        legend:{position:'right',labels:{usePointStyle:true,padding:12,font:{size:10.5}}},
        title:{display:true,text:'空調基準値 vs 換気基準値（室用途別 散布図）',font:{size:14,weight:600},color:'#d1d5e8',padding:{bottom:16}},
        tooltip:{backgroundColor:'rgba(10,14,30,.92)',cornerRadius:10,padding:12,
          callbacks:{label(ctx){const d=ctx.raw;return `${ctx.dataset.label}: ${d.label} (AC=${d.x}, V=${d.y})`}}}
      },
      scales:{
        x:{title:{display:true,text:'空調 [MJ/m²年]',font:{size:11}},beginAtZero:true,grid:{color:'rgba(255,255,255,.03)'}},
        y:{title:{display:true,text:'換気 [MJ/m²年]',font:{size:11}},beginAtZero:true,grid:{color:'rgba(255,255,255,.03)'}}
      }
    }
  });
})();

// ===== 6. Control Chart =====
(function(){
  const sel=document.getElementById('controlSelect');
  Object.keys(DATA.byBT).forEach(bt=>{const o=document.createElement('option');o.value=bt;o.textContent=bt;sel.appendChild(o)});
  sel.value='事務所等';let chart=null;
  function render(bt){
    const regions=['1地域','2地域','3地域','4地域','5地域','6地域','7地域','8地域'];
    let vals;
    if(bt==='事務所等'){vals=regions.map(r=>DATA.byRegion[r].ac);}
    else{const base=DATA.byBT[bt].ac;vals=[.85,.86,.82,.88,.92,1,1.01,1.2].map(r=>Math.round(base*r));}
    const mean=vals.reduce((a,b)=>a+b)/vals.length;
    const std=Math.sqrt(vals.reduce((s,v)=>s+(v-mean)**2,0)/vals.length);
    const ucl=mean+2*std,lcl=Math.max(0,mean-2*std);
    const ctx=document.getElementById('controlChart').getContext('2d');
    if(chart)chart.destroy();
    // Fill area between UCL and LCL
    chart=new Chart(ctx,{type:'line',
      data:{labels:regions,datasets:[
        {label:`UCL +2σ (${Math.round(ucl)})`,data:Array(8).fill(ucl),borderColor:'#f8717166',borderWidth:1.5,borderDash:[5,5],pointRadius:0,fill:false,order:3},
        {label:`LCL −2σ (${Math.round(lcl)})`,data:Array(8).fill(lcl),borderColor:'#f8717166',borderWidth:1.5,borderDash:[5,5],pointRadius:0,
          fill:{target:'-1',above:'rgba(248,113,113,.04)'},order:4},
        {label:`平均 (${Math.round(mean)})`,data:Array(8).fill(mean),borderColor:'#fbbf24aa',borderWidth:2,borderDash:[8,4],pointRadius:0,fill:false,order:2},
        {label:'空調基準値',data:vals,borderColor:'#818cf8',backgroundColor:'rgba(129,140,248,.08)',
         pointBackgroundColor:vals.map(v=>v>ucl||v<lcl?'#f87171':'#818cf8'),
         pointBorderColor:vals.map(v=>v>ucl||v<lcl?'#f87171':'#818cf8'),
         pointRadius:vals.map(v=>v>ucl||v<lcl?10:7),pointHoverRadius:13,
         borderWidth:3,tension:.25,fill:true,order:1}
      ]},
      options:{responsive:true,maintainAspectRatio:false,
        plugins:{
          legend:{position:'top',labels:{usePointStyle:true,padding:16,font:{size:10.5}}},
          title:{display:true,text:`${bt} — 空調基準値の地域別管理図`,font:{size:14,weight:600},color:'#d1d5e8',padding:{bottom:16}},
          tooltip:{backgroundColor:'rgba(10,14,30,.92)',cornerRadius:10,padding:12}
        },
        scales:{y:{title:{display:true,text:'空調基準値 [MJ/m²年]',font:{size:11}},grid:{color:'rgba(255,255,255,.03)'}}}
      }
    });
  }
  sel.addEventListener('change',()=>render(sel.value));render('事務所等');
})();

// ===== 7. Stratification =====
(function(){
  const bts=Object.keys(DATA.byBT);
  const keys=['ac','v','l','hw'];
  const ctx=document.getElementById('stratifyChart').getContext('2d');
  const ds=keys.map(k=>{
    const g=ctx.createLinearGradient(0,0,0,500);g.addColorStop(0,C[k]+'cc');g.addColorStop(1,C[k]+'55');
    return{label:LBL[k],data:bts.map(bt=>DATA.byBT[bt][k+'_pct']),backgroundColor:g,
      borderColor:C[k],borderWidth:2,borderRadius:3,hoverBorderWidth:3};
  });
  new Chart(ctx,{type:'bar',data:{labels:bts,datasets:ds},
    options:{responsive:true,maintainAspectRatio:false,
      plugins:{
        legend:{position:'top',labels:{usePointStyle:true,padding:18,font:{size:11}}},
        title:{display:true,text:'建物用途別 設備エネルギー構成比 [%]（6地域・層別分析）',font:{size:14,weight:600},color:'#d1d5e8',padding:{bottom:16}},
        tooltip:{backgroundColor:'rgba(10,14,30,.92)',cornerRadius:10,padding:12,
          callbacks:{label(ctx){return `${ctx.dataset.label}: ${ctx.raw}%`}}}
      },
      scales:{x:{stacked:true,grid:{display:false}},
        y:{stacked:true,max:100,title:{display:true,text:'構成比 [%]',font:{size:11}},ticks:{callback:v=>v+'%'},grid:{color:'rgba(255,255,255,.03)'}}}
    }
  });
  const acDom=bts.filter(bt=>DATA.byBT[bt].ac_pct>=50);
  const vDom=bts.filter(bt=>DATA.byBT[bt].v_pct>=30);
  document.getElementById('stratifyInsight').innerHTML=
    `💡 <strong>層別分析の結論:</strong><br>`+
    `・<span class="badge badge-ac">空調支配型</span> AC≥50%: <span class="tag-must">${acDom.join(', ')}</span> → 外皮・熱源パラメータの精度が最重要<br>`+
    `・<span class="badge badge-v">換気重視型</span> V≥30%: <span class="tag-imp">${vDom.join(', ')}</span> → ファン消費電力・制御方式の確認が必要<br>`+
    `・全用途共通: <span class="badge badge-l">照明</span>は常に10〜26%を占めるため、制御方式4種は全建物で確認すべき`;
})();
