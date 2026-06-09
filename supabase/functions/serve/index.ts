Deno.serve(async (_req) => { const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>遵义市第二届匹克球"Kinetic Planet 动能星球杯"全省邀请赛</title>
<style>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { font-size: 16px; }
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
  background: #F0F2F5; color: #1F2937; line-height: 1.6;
  -webkit-font-smoothing: antialiased; min-height: 100vh;
}
:root {
  --primary: #6366F1; --primary-dark: #4F46E5; --accent: #F97316; --accent-dark: #EA580C;
  --success: #10B981; --danger: #EF4444; --warning: #F59E0B;
  --bg: #F0F2F5; --surface: #FFFFFF; --text: #1F2937; --text2: #6B7280; --text3: #9CA3AF;
  --border: #E5E7EB; --radius-sm: 6px; --radius: 12px; --radius-lg: 20px;
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05); --shadow: 0 4px 6px rgba(0,0,0,0.07);
  --shadow-lg: 0 10px 25px rgba(0,0,0,0.1);
}
#app { max-width: 480px; margin: 0 auto; padding: 16px; min-height: 100vh; }
.page { display: none; }
.page.active { display: block; animation: fadeIn 0.3s ease; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }

.hero {
  text-align: center; padding: 36px 20px 24px; margin-bottom: 20px;
  background: linear-gradient(135deg, #6366F1 0%, #8B5CF6 40%, #A855F7 100%);
  border-radius: var(--radius-lg); color: #fff; box-shadow: var(--shadow-lg);
}
.hero h1 { font-size: 1.35rem; font-weight: 700; line-height: 1.5; letter-spacing: 0.02em; }
.hero .info { margin-top: 14px; font-size: 0.85rem; opacity: 0.92; }
.hero .info p { margin-top: 4px; }

.nav-links { display: flex; gap: 10px; margin-bottom: 20px; }
.nav-link {
  flex: 1; text-align: center; padding: 14px 12px; background: var(--surface);
  border-radius: var(--radius); box-shadow: var(--shadow-sm); cursor: pointer;
  font-weight: 600; font-size: 0.95rem; color: var(--primary); text-decoration: none;
  border: 2px solid var(--border); transition: all 0.2s;
}
.nav-link:active { background: #EEF2FF; border-color: var(--primary); }



.del-btn {
  padding: 4px 10px; font-size: 0.75rem; font-weight: 600; color: #fff;
  background: var(--danger); border: none; border-radius: 4px; cursor: pointer;
}
.del-btn:active { opacity: 0.8; }

.cta-btn {
  display: block; width: 100%; padding: 16px; font-size: 1.1rem; font-weight: 700;
  color: #fff; background: linear-gradient(135deg, #F97316, #F59E0B);
  border: none; border-radius: var(--radius); cursor: pointer; box-shadow: var(--shadow);
  transition: opacity 0.2s, transform 0.1s; text-align: center;
}
.cta-btn:active { transform: scale(0.98); }
.cta-btn:disabled { opacity: 0.5; cursor: not-allowed; }

.admin-foot { text-align: center; margin-top: 24px; padding: 16px; }
.admin-foot a { color: var(--text3); font-size: 0.8rem; text-decoration: none; cursor: pointer; }

.page-header {
  display: flex; align-items: center; gap: 12px; margin-bottom: 16px;
  padding-bottom: 12px; border-bottom: 1px solid var(--border);
}
.page-header h2 { font-size: 1.2rem; font-weight: 700; flex: 1; }
.back-btn {
  background: none; border: none; color: var(--primary); font-size: 0.95rem;
  cursor: pointer; padding: 6px 10px; border-radius: var(--radius-sm); white-space: nowrap;
}
.back-btn:active { background: #EEF2FF; }

.form-group { margin-bottom: 18px; }
.form-group label { display: block; font-weight: 600; margin-bottom: 6px; font-size: 0.9rem; }
.form-group .req { color: var(--danger); }
.form-group input[type="text"],
.form-group input[type="tel"],
.form-group input[type="date"],
.form-group select {
  width: 100%; padding: 12px 14px; border: 1.5px solid var(--border);
  border-radius: var(--radius-sm); font-size: 1rem; background: #FAFBFC;
  transition: border-color 0.2s, box-shadow 0.2s; -webkit-appearance: none;
}
.form-group input:focus, .form-group select:focus {
  outline: none; border-color: var(--primary); box-shadow: 0 0 0 3px rgba(99,102,241,0.12);
  background: #fff;
}
.form-group .help { font-size: 0.8rem; color: var(--primary); margin-top: 4px; display: block; }
.form-group .slot { font-size: 0.8rem; color: var(--text2); margin-top: 4px; display: block; }
.radio-group { display: flex; gap: 24px; }
.radio-group label { display: flex; align-items: center; gap: 6px; font-weight: 400; font-size: 1rem; cursor: pointer; }
.radio-group input[type="radio"] { width: 18px; height: 18px; accent-color: var(--primary); }
.error-summary {
  background: #FEF2F2; border: 1px solid #FECACA; border-radius: var(--radius-sm);
  padding: 12px 16px; margin-bottom: 16px; color: var(--danger); font-size: 0.9rem;
}
.error-summary p { margin-top: 2px; }

.data-table { width: 100%; border-collapse: collapse; font-size: 0.85rem; }
.data-table th {
  background: var(--primary); color: #fff; padding: 10px 8px; text-align: left;
  position: sticky; top: 0; font-weight: 600;
}
.data-table td { padding: 10px 8px; border-bottom: 1px solid var(--border); }
.data-table tr:nth-child(even) { background: #F9FAFB; }
.table-wrap { overflow-x: auto; -webkit-overflow-scrolling: touch; border-radius: var(--radius-sm); }

.payment-container, .success-container { text-align: center; padding: 20px 0; }
.payment-container h2, .success-container h2 { font-size: 1.3rem; margin-bottom: 12px; color: var(--primary); }
.payment-qr { width: 240px; height: auto; border-radius: var(--radius); margin: 16px 0; }
.payment-note { font-size: 0.9rem; color: var(--text2); margin-top: 8px; }
.payment-container .cta-btn { margin-top: 20px; }

.success-icon {
  width: 64px; height: 64px; background: var(--success); color: #fff; border-radius: 50%;
  display: flex; align-items: center; justify-content: center; font-size: 2rem;
  margin: 0 auto 16px;
}
.success-container .data-table { margin: 16px 0; text-align: left; }
.success-container .data-table td:first-child { font-weight: 600; color: var(--text2); width: 40%; white-space: nowrap; }

.admin-login { text-align: center; padding: 40px 20px; }
.admin-login h2 { font-size: 1.2rem; margin-bottom: 20px; }
.admin-login input {
  width: 100%; padding: 14px; border: 1.5px solid var(--border); border-radius: var(--radius-sm);
  font-size: 1rem; text-align: center; letter-spacing: 0.3em; margin-bottom: 16px;
}
.admin-error { color: var(--danger); font-size: 0.9rem; margin-bottom: 12px; }
.admin-login .back-btn { display: block; margin-top: 16px; text-align: center; width: 100%; }

.admin-tabs { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px; }
.admin-tab {
  padding: 8px 14px; border: 1px solid var(--border); border-radius: 20px;
  background: var(--surface); font-size: 0.8rem; cursor: pointer; transition: all 0.2s; white-space: nowrap;
}
.admin-tab:hover, .admin-tab.on { background: var(--primary); color: #fff; border-color: var(--primary); }

.export-btn {
  display: block; width: 100%; padding: 14px; margin-top: 16px;
  font-size: 1rem; font-weight: 600; color: #fff; background: var(--success);
  border: none; border-radius: var(--radius); cursor: pointer;
}
.export-btn:active { opacity: 0.85; }

.pdf-wrap { width: 100%; height: 70vh; border-radius: var(--radius-sm); overflow: hidden; }
.pdf-wrap iframe { width: 100%; height: 100%; border: none; }
.pdf-fallback { text-align: center; margin-top: 16px; }
.pdf-fallback a {
  display: inline-block; padding: 12px 24px; background: var(--primary); color: #fff;
  border-radius: var(--radius-sm); text-decoration: none; font-weight: 600;
}

.toast {
  position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%);
  background: #1F2937; color: #fff; padding: 12px 24px; border-radius: var(--radius);
  font-size: 0.9rem; z-index: 9999; box-shadow: var(--shadow-lg);
  animation: toastIn 0.3s ease; max-width: 90vw; text-align: center;
}
@keyframes toastIn { from { opacity: 0; transform: translateX(-50%) translateY(20px); } }

.empty { text-align: center; padding: 48px 20px; color: var(--text3); font-size: 0.95rem; }
.count-badge { font-size: 0.85rem; color: var(--text2); margin-bottom: 12px; }

@media (min-width: 768px) {
  #app { max-width: 768px; padding: 24px; }
  .hero h1 { font-size: 1.6rem; }
}
</style>
</head>
<body>

<noscript><div style="text-align:center;padding:40px;color:red;font-size:1.2rem;">请使用浏览器打开此页面（Chrome/Safari），不要在微信或其他APP内打开</div></noscript>
<div id="app">

  <!-- ===== 主页 ===== -->
  <section id="page-home" class="page active">
    <div class="hero">
      <h1>欢迎报名<br>遵义市第二届匹克球<br>"Kinetic Planet 动能星球杯"<br>全省邀请赛</h1>
      <div class="info">
        <p>比赛时间：2026年6月27日—28日</p>
        <p>比赛地点：遵义医科大学体育场</p>
        <p>联系电话：13310781131</p>
      </div>
    </div>
    <div class="nav-links">
      <div class="nav-link" onclick="showPage('page-players')">选手名单</div>
      <div class="nav-link" onclick="showPage('page-notice')">赛事通知</div>
    </div>
    <button class="cta-btn" onclick="showPage('page-register')">立即报名</button>
    <div class="admin-foot">
      <a onclick="showPage('page-admin')">管理员入口</a>
    </div>
  </section>

  <!-- ===== 选手名单（公开） ===== -->
  <section id="page-players" class="page">
    <div class="page-header">
      <button class="back-btn" onclick="showPage('page-home')">← 返回</button>
      <h2>选手名单</h2>
    </div>
    <div id="player-list"></div>
  </section>

  <!-- ===== 赛事通知 ===== -->
  <section id="page-notice" class="page">
    <div class="page-header">
      <button class="back-btn" onclick="showPage('page-home')">← 返回</button>
      <h2>赛事通知</h2>
    </div>
    <div class="pdf-wrap">
      <iframe id="pdf-viewer" src="https://wyzoqkfqzwvtxzrbtgsp.supabase.co/storage/v1/object/public/public-site/notice.pdf" title="赛事通知PDF"></iframe>
    </div>
    <div class="pdf-fallback">
      <a href="https://wyzoqkfqzwvtxzrbtgsp.supabase.co/storage/v1/object/public/public-site/notice.pdf" download>📄 点击下载赛事通知PDF</a>
    </div>
  </section>

  <!-- ===== 报名页面 ===== -->
  <section id="page-register" class="page">
    <div class="page-header">
      <button class="back-btn" id="reg-back-btn" onclick="confirmLeaveForm()">← 返回</button>
      <h2>报名参赛</h2>
    </div>
    <form id="reg-form" autocomplete="off">
      <div class="form-group">
        <label for="f-name">姓名 <span class="req">*</span></label>
        <input type="text" id="f-name" maxlength="20" placeholder="请输入真实姓名" required>
      </div>
      <div class="form-group">
        <label>性别 <span class="req">*</span></label>
        <div class="radio-group">
          <label><input type="radio" name="gender" value="男" required> 男</label>
          <label><input type="radio" name="gender" value="女" required> 女</label>
        </div>
      </div>
      <div class="form-group">
        <label for="f-phone">电话号码 <span class="req">*</span></label>
        <input type="tel" id="f-phone" maxlength="11" placeholder="请输入11位手机号" required>
      </div>
      <div class="form-group">
        <label>是否需要组委会提供住宿</label>
        <div class="radio-group">
          <label><input type="radio" name="acco" value="yes"> 是</label>
          <label><input type="radio" name="acco" value="no" checked> 否</label>
        </div>
      </div>
      <div class="form-group">
        <label for="f-birth">出生年月日 <span class="req">*</span></label>
        <input type="date" id="f-birth" min="1961-01-01" max="2008-12-31" required>
        <span class="help" id="age-display"></span>
      </div>
      <div class="form-group">
        <label for="f-id">身份证号 <span class="req">*</span></label>
        <input type="text" id="f-id" maxlength="18" placeholder="请输入18位身份证号" required>
      </div>
      <div class="form-group">
        <label for="f-city">所属市州 <span class="req">*</span></label>
        <select id="f-city" required>
          <option value="">请选择</option>
          <option value="贵阳市">贵阳市</option>
          <option value="遵义市">遵义市</option>
          <option value="六盘水市">六盘水市</option>
          <option value="安顺市">安顺市</option>
          <option value="毕节市">毕节市</option>
          <option value="铜仁市">铜仁市</option>
          <option value="黔东南苗族侗族自治州">黔东南苗族侗族自治州</option>
          <option value="黔南布依族苗族自治州">黔南布依族苗族自治州</option>
          <option value="黔西南布依族苗族自治州">黔西南布依族苗族自治州</option>
        </select>
      </div>
      <div class="form-group">
        <label for="f-primary">报名项目 <span class="req">*</span></label>
        <select id="f-primary" required>
          <option value="">请先选择性别和出生日期</option>
        </select>
        <span class="slot" id="primary-slot"></span>
      </div>
      <div class="form-group">
        <label for="f-secondary">兼报项目（若需兼报其他项目，请在此填写，后续无法重复报名，若有多个搭档请填写全部姓名）</label>
        <select id="f-secondary">
          <option value="">不兼报</option>
        </select>
        <span class="slot" id="secondary-slot"></span>
      </div>
      <div class="form-group" id="partner-group" style="display:none;">
        <label for="f-partner">请输入您的搭档姓名 <span class="req">*</span></label>
        <input type="text" id="f-partner" maxlength="20" placeholder="请输入搭档真实姓名">
      </div>
      <div class="error-summary" id="err-sum" style="display:none;"></div>
      <button type="submit" class="cta-btn" id="submit-btn">提交报名</button>
    </form>
  </section>

  <!-- ===== 付款页面 ===== -->
  <section id="page-payment" class="page">
    <div class="payment-container">
      <h2>报名信息已提交！<br>请完成付款</h2>
      <p style="font-size:1rem;color:var(--accent);font-weight:600;">报名费：¥50/人</p>
      <img class="payment-qr" src="https://wyzoqkfqzwvtxzrbtgsp.supabase.co/storage/v1/object/public/public-site/payment-qr.jpg" alt="付款二维码" onerror="this.style.display='none';document.getElementById('qr-fallback').style.display='block';">
      <div id="qr-fallback" style="display:none;padding:20px;color:var(--text2);">
        <p>付款码图片加载失败</p><p>请联系管理员：13310781131</p>
      </div>
      <p class="payment-note">请使用微信或支付宝扫码支付</p>
      <p class="payment-note">付款时请备注报名选手姓名</p>
      <button class="cta-btn" onclick="showPage('page-success')">已完成付款</button>
    </div>
  </section>

  <!-- ===== 报名成功 ===== -->
  <section id="page-success" class="page">
    <div class="success-container">
      <div class="success-icon">✓</div>
      <h2 style="color:var(--success);">付款完成，报名成功！</h2>
      <p style="color:var(--text2);margin-bottom:16px;">请截图保存此页面作为参赛凭证</p>
      <div class="table-wrap" id="success-summary"></div>
      <button class="cta-btn" onclick="showPage('page-home')" style="margin-top:20px;">返回首页</button>
    </div>
  </section>

  <!-- ===== 管理员 ===== -->
  <section id="page-admin" class="page">
    <div id="admin-login-block" class="admin-login">
      <h2>管理员登录</h2>
      <input type="password" id="admin-pw" placeholder="请输入管理员密码" maxlength="20" autocomplete="off">
      <div class="admin-error" id="admin-err" style="display:none;"></div>
      <button class="cta-btn" onclick="adminLogin()">登录</button>
      <button class="back-btn" onclick="showPage('page-home')" style="margin-top:16px;">← 返回首页</button>
    </div>
    <div id="admin-dash" style="display:none;">
      <div class="page-header">
        <h2>管理员控制台</h2>
        <button class="back-btn" onclick="logoutAdmin()">退出登录</button>
      </div>
      <div class="admin-tabs" id="admin-tabs"></div>
      <div class="table-wrap" id="admin-table"></div>
      <button class="export-btn" onclick="exportCSV()">导出为 Excel / CSV 文件</button>
      <button class="export-btn" style="background:var(--danger);margin-top:8px;" onclick="clearAllData()">清空所有报名数据</button>
    </div>
  </section>

</div>

<div class="toast" id="toast" style="display:none;"></div>

<script>
// ==================== Supabase REST API 配置 ====================
const REST_URL = 'https://wyzoqkfqzwvtxzrbtgsp.supabase.co/rest/v1';
const ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5em9xa2Zxend2dHh6cmJ0Z3NwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkwMTQ0ODMsImV4cCI6MjA5NDU5MDQ4M30.j94Rc7_m5dsNUmXDt-nrYGT3O5bQLEkZHFTMRSmTYKY';

// Supabase REST API 调用（使用 URLSearchParams 确保正确编码）
async function restFetch(path, method, body, extraHeaders, queryParams) {
  var url = REST_URL + path;
  if (queryParams) {
    var u = new URL(url);
    Object.keys(queryParams).forEach(function(key) {
      u.searchParams.append(key, queryParams[key]);
    });
    url = u.toString();
  }
  var headers = {};
  headers['apikey'] = ANON_KEY;
  headers['Authorization'] = 'Bearer ' + ANON_KEY;
  headers['Accept'] = 'application/json';
  if (body) headers['Content-Type'] = 'application/json';
  if (extraHeaders) {
    Object.keys(extraHeaders).forEach(function(k) { headers[k] = extraHeaders[k]; });
  }
  var opts = { method: method, headers: headers };
  if (body) opts.body = JSON.stringify(body);
  var res = await fetch(url, opts);
  var text = await res.text();
  var data = null;
  try { data = JSON.parse(text); } catch(e) {}
  if (!res.ok) {
    var parts = [];
    parts.push('状态码: ' + res.status);
    if (data && data.message) parts.push('消息: ' + data.message);
    if (data && data.code) parts.push('代码: ' + data.code);
    if (data && data.details) parts.push('详情: ' + data.details);
    if (data && data.hint) parts.push('提示: ' + data.hint);
    if (!data || !data.message) parts.push('响应: ' + text.substring(0, 200));
    throw new Error(parts.join(' | '));
  }
  return { data: data, status: res.status };
}

// ==================== 常量 ====================
const TOURNAMENT_DATE = new Date('2026-06-27');
const ADMIN_PASSWORD = '27885';
const ALL_EVENTS = ['男子单打', '男子双打', '女子单打', '女子双打', '公开组男子双打', '公开组女子双打', '常青组男子双打', '常青组女子双打', '混合双打'];
const MAX_SLOTS = 32;
const EVENTS_CONFIG = {
  '男': {
    '公开组': { primary: ['男子单打', '男子双打'], secondary: ['男子单打', '男子双打'] },
    '常青组': { primary: ['公开组男子双打', '常青组男子双打', '混合双打'], secondary: ['公开组男子双打', '常青组男子双打', '混合双打'] }
  },
  '女': {
    '公开组': { primary: ['女子单打', '女子双打'], secondary: ['女子单打', '女子双打'] },
    '常青组': { primary: ['公开组女子双打', '常青组女子双打', '混合双打'], secondary: ['公开组女子双打', '常青组女子双打', '混合双打'] }
  }
};

// ==================== 全局状态 ====================
var STATE = {
  eventCounts: {},
  regData: null,
  isAdmin: false,
  allAdminData: [],
  formDirty: false
};

// ==================== 页面导航 ====================
function showPage(pageId, data) {
  document.querySelectorAll('.page').forEach(function(p) { p.classList.remove('active'); });
  var target = document.getElementById(pageId);
  if (!target) return;
  target.classList.add('active');
  window.location.hash = pageId;
  window.scrollTo(0, 0);

  switch (pageId) {
    case 'page-home': loadHome(); break;
    case 'page-players': loadPlayerList(); break;
    case 'page-notice': break;
    case 'page-register':
      STATE.formDirty = false;
      initRegForm();
      break;
    case 'page-payment': break;
    case 'page-success': renderSuccess(); break;
    case 'page-admin':
      if (STATE.isAdmin) showAdminDash();
      break;
  }
}

// ==================== 主页 ====================
async function loadHome() {
  await loadCounts();
}

async function loadCounts() {
  try {
    var res = await restFetch('/registrations', 'GET', null, null, { select: 'primary_event,secondary_event' });
    var counts = {};
    ALL_EVENTS.forEach(function(e) { counts[e] = 0; });
    (res.data || []).forEach(function(r) {
      if (counts[r.primary_event] !== undefined) counts[r.primary_event]++;
      if (r.secondary_event && counts[r.secondary_event] !== undefined) counts[r.secondary_event]++;
    });
    STATE.eventCounts = counts;
  } catch (err) { console.error('loadCounts:', err.message || err); }
}

// ==================== 选手名单（公开） ====================
async function loadPlayerList() {
  var container = document.getElementById('player-list');
  try {
    var res = await restFetch('/registrations', 'GET', null, null, { select: 'name,gender,age_group,city,primary_event,secondary_event,partner_name', order: 'created_at.desc' });
    renderPlayerTable(container, res.data || []);
  } catch (err) {
    container.innerHTML = '<div class="empty">加载失败：' + esc(err.message) + '</div>';
  }
}

function renderPlayerTable(container, data) {
  if (!data.length) { container.innerHTML = '<div class="empty">暂无选手报名</div>'; return; }
  var html = '<div class="table-wrap"><table class="data-table"><thead><tr><th>序号</th><th>姓名</th><th>性别</th><th>年龄组</th><th>所属市州</th><th>主项</th><th>兼项</th><th>搭档</th></tr></thead><tbody>';
  data.forEach(function(p, i) {
    html += '<tr><td>' + (i + 1) + '</td><td>' + esc(p.name) + '</td><td>' + (p.gender || '') + '</td><td>' + p.age_group + '</td><td>' + p.city + '</td><td>' + (p.primary_event || '') + '</td><td>' + (p.secondary_event || '-') + '</td><td>' + (p.partner_name || '-') + '</td></tr>';
  });
  html += '</tbody></table></div>';
  container.innerHTML = html;
}

// ==================== 报名表单 ====================
function initRegForm() {
  document.getElementById('reg-form').reset();
  document.getElementById('err-sum').style.display = 'none';
  document.getElementById('age-display').textContent = '';
  document.getElementById('primary-slot').textContent = '';
  document.getElementById('secondary-slot').textContent = '';
  document.querySelector('input[name="acco"][value="no"]').checked = true;
  document.querySelector('input[name="acco"][value="yes"]').disabled = false;
  document.getElementById('f-partner').value = '';
  document.getElementById('partner-group').style.display = 'none';
  document.getElementById('f-primary').innerHTML = '<option value="">请先选择性别和出生日期</option>';
  document.getElementById('f-secondary').innerHTML = '<option value="">不兼报</option>';
  document.getElementById('submit-btn').disabled = false;
  document.getElementById('submit-btn').textContent = '提交报名';
  STATE.formDirty = false;

  // 防止重复绑定（核心修复：避免多次进入报名页后重复提交）
  if (!STATE._formReady) {
    STATE._formReady = true;
    document.querySelectorAll('input[name="gender"]').forEach(function(r) {
      r.addEventListener('change', updateEvents);
    });
    document.getElementById('f-birth').addEventListener('change', function() {
      calcAge();
      updateEvents();
    });
    document.getElementById('f-primary').addEventListener('change', function() {
      updateSecondary();
      showSlotInfo();
    });
    document.getElementById('f-secondary').addEventListener('change', showSlotInfo);
    document.getElementById('f-city').addEventListener('change', onCityChange);
    document.getElementById('reg-form').addEventListener('submit', handleSubmit);
  }

  var fields = document.querySelectorAll('#reg-form input, #reg-form select');
  fields.forEach(function(f) {
    f.addEventListener('change', function() { STATE.formDirty = true; }, { once: true });
    f.addEventListener('input', function() { STATE.formDirty = true; }, { once: true });
  });
}

function calcAge() {
  var birthStr = document.getElementById('f-birth').value;
  var display = document.getElementById('age-display');
  if (!birthStr) { display.textContent = ''; return null; }
  var birth = new Date(birthStr);
  var age = TOURNAMENT_DATE.getFullYear() - birth.getFullYear();
  var m = TOURNAMENT_DATE.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && TOURNAMENT_DATE.getDate() < birth.getDate())) age--;
  var group = age >= 50 ? '常青组' : '公开组';
  var valid = age >= 18 ? '' : '（未满18周岁，不符合参赛条件）';
  display.textContent = '年龄：' + age + '岁（' + group + '）' + valid;
  display.style.color = age >= 18 ? '' : 'var(--danger)';
  return { age: age, group: group, valid: age >= 18 };
}

function updateEvents() {
  var gender = document.querySelector('input[name="gender"]:checked');
  gender = gender ? gender.value : null;
  var ageInfo = calcAge();
  var primaryEl = document.getElementById('f-primary');

  if (!gender || !ageInfo || !ageInfo.valid) {
    primaryEl.innerHTML = '<option value="">请先选择性别和出生日期</option>';
    document.getElementById('f-secondary').innerHTML = '<option value="">不兼报</option>';
    return;
  }

  var cfg = EVENTS_CONFIG[gender][ageInfo.group];
  primaryEl.innerHTML = '<option value="">请选择</option>' +
    cfg.primary.map(function(e) { return '<option value="' + e + '">' + e + '</option>'; }).join('');
  updateSecondary();
}

function updateSecondary() {
  var gender = document.querySelector('input[name="gender"]:checked');
  gender = gender ? gender.value : null;
  var ageInfo = calcAge();
  var primary = document.getElementById('f-primary').value;
  var secondaryEl = document.getElementById('f-secondary');
  if (!gender || !ageInfo || !ageInfo.valid) {
    secondaryEl.innerHTML = '<option value="">不兼报</option>';
    return;
  }
  var cfg = EVENTS_CONFIG[gender][ageInfo.group];
  var options = cfg.secondary.filter(function(e) { return e !== primary; });
  secondaryEl.innerHTML = '<option value="">不兼报</option>' +
    options.map(function(e) { return '<option value="' + e + '">' + e + '</option>'; }).join('');
}

function onCityChange() {
  var city = document.getElementById('f-city').value;
  var yesRadio = document.querySelector('input[name="acco"][value="yes"]');
  var noRadio = document.querySelector('input[name="acco"][value="no"]');
  if (city === '遵义市') {
    yesRadio.disabled = true;
    noRadio.checked = true;
  } else {
    yesRadio.disabled = false;
  }
}

function isDoublesEvent(eventName) {
  return eventName && eventName.indexOf('单打') === -1;
}

async function showSlotInfo() {
  await loadCounts();
  var primary = document.getElementById('f-primary').value;
  var secondary = document.getElementById('f-secondary').value;
  document.getElementById('primary-slot').textContent = primary ?
    '（剩余名额：' + (MAX_SLOTS - (STATE.eventCounts[primary] || 0)) + '）' : '';
  document.getElementById('secondary-slot').textContent = secondary ?
    '（剩余名额：' + (MAX_SLOTS - (STATE.eventCounts[secondary] || 0)) + '）' : '';

  var needPartner = isDoublesEvent(primary) || isDoublesEvent(secondary);
  var partnerGroup = document.getElementById('partner-group');
  var partnerInput = document.getElementById('f-partner');
  if (needPartner) {
    partnerGroup.style.display = 'block';
    partnerInput.required = true;
  } else {
    partnerGroup.style.display = 'none';
    partnerInput.required = false;
    partnerInput.value = '';
  }
}

// ==================== 表单校验 ====================
function validateForm() {
  var errs = [];
  var name = document.getElementById('f-name').value.trim();
  if (!name) errs.push('请输入姓名');
  if (name.length > 20) errs.push('姓名不能超过20个字符');

  var gender = document.querySelector('input[name="gender"]:checked');
  if (!gender) errs.push('请选择性别');
  gender = gender ? gender.value : null;

  var phone = document.getElementById('f-phone').value.trim();
  if (!phone) errs.push('请输入电话号码');
  else if (!/^1[3-9]\\d{9}$/.test(phone)) errs.push('请输入正确的11位手机号');

  var birthStr = document.getElementById('f-birth').value;
  if (!birthStr) errs.push('请选择出生年月日');
  else {
    var birth = new Date(birthStr);
    if (birth < new Date('1961-01-01') || birth > new Date('2008-12-31')) {
      errs.push('出生日期必须在1961年1月1日至2008年12月31日之间');
    }
    var ageInfo = calcAge();
    if (ageInfo && !ageInfo.valid) errs.push('未满18周岁，不符合参赛条件');
  }

  var idNum = document.getElementById('f-id').value.trim();
  if (!idNum) errs.push('请输入身份证号');
  else if (!validateID(idNum)) errs.push('请输入正确的18位身份证号');

  if (birthStr && idNum.length === 18) {
    var idBirth = idNum.substring(6, 14);
    var entered = birthStr.replace(/-/g, '');
    if (idBirth !== entered) errs.push('身份证号中的出生日期与填写的出生年月日不一致');
  }

  var city = document.getElementById('f-city').value;
  if (!city) errs.push('请选择所属市州');

  var primary = document.getElementById('f-primary').value;
  if (!primary) errs.push('请选择报名项目');

  if (gender && birthStr && primary) {
    var ai = calcAge();
    if (ai && ai.valid) {
      var allowed = EVENTS_CONFIG[gender][ai.group].primary;
      if (allowed.indexOf(primary) === -1) {
        errs.push('您的性别和年龄组（' + ai.group + '）不能报名' + primary);
      }
    }
  }

  var secondary = document.getElementById('f-secondary').value;
  if (secondary && secondary === primary) errs.push('兼报项目不能与报名项目相同');

  if (isDoublesEvent(primary) || isDoublesEvent(secondary)) {
    var partner = document.getElementById('f-partner').value.trim();
    if (!partner) errs.push('双打项目请填写搭档姓名');
    if (partner.length > 20) errs.push('搭档姓名不能超过20个字符');
  }

  return errs;
}

function validateID(id) {
  if (id.length !== 18) return false;
  if (!/^\\d{17}[\\dXx]$/.test(id)) return false;
  var weights = [7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2];
  var checkMap = '10X98765432';
  var sum = 0;
  for (var i = 0; i < 17; i++) sum += parseInt(id[i]) * weights[i];
  return checkMap[sum % 11] === id[17].toUpperCase();
}

// ==================== 表单提交 ====================
async function handleSubmit(e) {
  e.preventDefault();
  var errs = validateForm();
  if (errs.length > 0) {
    var errEl = document.getElementById('err-sum');
    errEl.style.display = 'block';
    errEl.innerHTML = errs.map(function(m) { return '<p>• ' + m + '</p>'; }).join('');
    errEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }
  document.getElementById('err-sum').style.display = 'none';

  var btn = document.getElementById('submit-btn');
  btn.disabled = true;
  btn.textContent = '提交中...';

  try {
    var idNum = document.getElementById('f-id').value.trim();

    // 检查重复身份证
    var dupRes = await restFetch('/registrations', 'GET', null, null, { select: 'id', id_number: 'eq.' + idNum });
    if (dupRes.data && dupRes.data.length > 0) {
      toast('该身份证号已报名，不能重复提交'); btn.disabled = false; btn.textContent = '提交报名'; return;
    }

    await loadCounts();
    var primary = document.getElementById('f-primary').value;
    var secondary = document.getElementById('f-secondary').value;

    if ((STATE.eventCounts[primary] || 0) >= MAX_SLOTS) { toast(primary + '已满员，请选择其他项目'); btn.disabled = false; btn.textContent = '提交报名'; return; }
    if (secondary && (STATE.eventCounts[secondary] || 0) >= MAX_SLOTS) { toast(secondary + '已满员'); btn.disabled = false; btn.textContent = '提交报名'; return; }

    var ageInfo = calcAge();
    var reg = {
      name: document.getElementById('f-name').value.trim(),
      gender: document.querySelector('input[name="gender"]:checked').value,
      phone: document.getElementById('f-phone').value.trim(),
      needs_accommodation: document.querySelector('input[name="acco"]:checked').value === 'yes',
      birth_date: document.getElementById('f-birth').value,
      id_number: idNum,
      city: document.getElementById('f-city').value,
      primary_event: primary,
      secondary_event: secondary || null,
      partner_name: (isDoublesEvent(primary) || isDoublesEvent(secondary)) ? document.getElementById('f-partner').value.trim() : null,
      age_group: ageInfo.group
    };

    var res = await restFetch('/registrations', 'POST', reg, { 'Prefer': 'return=representation' });
    STATE.regData = reg;
    STATE.formDirty = false;
    showPage('page-payment');
  } catch (err) {
    console.error('提交错误:', err.message || err);
    var rawMsg = err.message || '';
    var userMsg;
    if (rawMsg.indexOf('23505') !== -1 || rawMsg.indexOf('duplicate') !== -1) {
      userMsg = '该身份证号已报名，请勿重复提交';
    } else if (rawMsg.indexOf('409') !== -1) {
      userMsg = '提交冲突，该名额可能刚被报满，请刷新页面后重试';
    } else {
      userMsg = '提交失败：' + rawMsg;
    }
    toast(userMsg, 8000);
  } finally {
    btn.disabled = false;
    btn.textContent = '提交报名';
  }
}

function confirmLeaveForm() {
  if (STATE.formDirty) {
    if (confirm('表单内容尚未提交，确定要离开吗？')) showPage('page-home');
  } else {
    showPage('page-home');
  }
}

// ==================== 报名成功 ====================
function renderSuccess() {
  var r = STATE.regData;
  if (!r) { document.getElementById('success-summary').innerHTML = '<p>暂无报名数据</p>'; return; }
  var html = '<table class="data-table">';
  html += '<tr><td>姓名</td><td>' + esc(r.name) + '</td></tr>';
  html += '<tr><td>性别</td><td>' + r.gender + '</td></tr>';
  html += '<tr><td>电话号码</td><td>' + r.phone + '</td></tr>';
  html += '<tr><td>年龄组</td><td>' + r.age_group + '</td></tr>';
  html += '<tr><td>出生日期</td><td>' + r.birth_date + '</td></tr>';
  html += '<tr><td>身份证号</td><td>' + r.id_number + '</td></tr>';
  html += '<tr><td>所属市州</td><td>' + r.city + '</td></tr>';
  html += '<tr><td>报名项目</td><td>' + r.primary_event + '</td></tr>';
  if (r.secondary_event) html += '<tr><td>兼报项目</td><td>' + r.secondary_event + '</td></tr>';
  if (r.partner_name) html += '<tr><td>搭档姓名</td><td>' + esc(r.partner_name) + '</td></tr>';
  html += '<tr><td>住宿</td><td>' + (r.needs_accommodation ? '需要' : '不需要') + '</td></tr>';
  html += '</table>';
  document.getElementById('success-summary').innerHTML = html;
}

// ==================== 管理员 ====================
async function adminLogin() {
  var pw = document.getElementById('admin-pw').value;
  var errEl = document.getElementById('admin-err');
  if (pw !== ADMIN_PASSWORD) {
    errEl.style.display = 'block';
    errEl.textContent = '密码错误';
    document.getElementById('admin-pw').value = '';
    return;
  }
  errEl.style.display = 'none';
  STATE.isAdmin = true;
  showAdminDash();
}

function logoutAdmin() {
  STATE.isAdmin = false;
  document.getElementById('admin-login-block').style.display = 'block';
  document.getElementById('admin-dash').style.display = 'none';
  document.getElementById('admin-pw').value = '';
  document.getElementById('admin-err').style.display = 'none';
}

function showAdminDash() {
  document.getElementById('admin-login-block').style.display = 'none';
  document.getElementById('admin-dash').style.display = 'block';
  loadAdminData();
}

async function loadAdminData(filter) {
  try {
    var res = await restFetch('/registrations', 'GET', null, null, { select: '*', order: 'created_at.desc' });
    STATE.allAdminData = res.data || [];
    renderAdmin(filter);
  } catch (err) {
    document.getElementById('admin-table').innerHTML = '<div class="empty">加载失败：' + esc(err.message || '') + '</div>';
  }
}

function renderAdmin(filter) {
  var data = STATE.allAdminData;
  var title = '全部报名记录';
  if (filter) {
    data = data.filter(function(r) { return r.primary_event === filter || r.secondary_event === filter; });
    title = filter;
  }

  var tabNames = ['全部'].concat(ALL_EVENTS);
  var tabsHtml = tabNames.map(function(name) {
    var count = name === '全部' ? STATE.allAdminData.length :
      STATE.allAdminData.filter(function(r) { return r.primary_event === name || r.secondary_event === name; }).length;
    var cls = (name === '全部' && !filter) || (name === filter) ? ' on' : '';
    var click = name === '全部' ? "loadAdminData()" : "loadAdminData('" + name + "')";
    return '<button class="admin-tab' + cls + '" onclick="' + click + '">' + name + ' (' + count + ')</button>';
  }).join('');
  document.getElementById('admin-tabs').innerHTML = tabsHtml;

  var html = '<h3 style="margin-bottom:10px;">' + title + '（共 ' + data.length + ' 人）</h3>';
  if (!data.length) { html += '<div class="empty">暂无报名记录</div>'; }
  else {
    html += '<table class="data-table"><thead><tr>' +
      '<th>姓名</th><th>性别</th><th>年龄组</th><th>电话</th><th>出生日期</th>' +
      '<th>身份证号</th><th>搭档</th><th>市州</th><th>主项</th><th>兼项</th><th>住宿</th><th>付款</th><th>报名时间</th>' +
      '<th>操作</th>' +
      '</tr></thead><tbody>';
    data.forEach(function(r) {
      html += '<tr>' +
        '<td>' + esc(r.name) + '</td><td>' + r.gender + '</td><td>' + r.age_group + '</td>' +
        '<td>' + r.phone + '</td><td>' + r.birth_date + '</td><td>' + r.id_number + '</td>' +
        '<td>' + (r.partner_name || '-') + '</td>' +
        '<td>' + r.city + '</td><td>' + r.primary_event + '</td>' +
        '<td>' + (r.secondary_event || '-') + '</td><td>' + (r.needs_accommodation ? '是' : '否') + '</td>' +
        '<td style="color:' + (r.payment_status === 'paid' ? 'var(--success)' : 'var(--warning)') + ';font-weight:600;">' +
        (r.payment_status === 'paid' ? '✓已付' : '待付') + '</td>' +
        '<td>' + new Date(r.created_at).toLocaleString('zh-CN', { hour12: false }) + '</td>' +
        '<td><button class="del-btn" onclick="deleteReg(' + r.id + ', \\'' + esc(r.name) + '\\')">删除</button></td>' +
        '</tr>';
    });
    html += '</tbody></table>';
  }
  document.getElementById('admin-table').innerHTML = html;
}

function exportCSV() {
  var all = STATE.allAdminData;
  if (!all.length) { toast('没有数据可导出'); return; }
  var headers = ['姓名','性别','年龄组','电话','出生日期','身份证号','搭档','市州','主项','兼项','住宿','付款状态','报名时间'];
  var csv = '﻿' + headers.join(',') + '\\n';
  all.forEach(function(r) {
    var row = [
      r.name, r.gender, r.age_group, r.phone, r.birth_date, r.id_number,
      r.partner_name || '', r.city, r.primary_event, r.secondary_event || '', r.needs_accommodation ? '是' : '否',
      r.payment_status === 'paid' ? '已付' : '待付',
      new Date(r.created_at).toLocaleString('zh-CN', { hour12: false })
    ];
    csv += row.map(function(c) { return '"' + (c + '').replace(/"/g, '""') + '"'; }).join(',') + '\\n';
  });
  var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url;
  a.download = '匹克球报名记录_' + new Date().toISOString().split('T')[0] + '.csv';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  toast('导出成功');
}

// ==================== 删除报名 ====================
async function deleteReg(rowId, name) {
  if (!confirm('确定要删除 ' + name + ' 的报名记录吗？此操作不可撤销。')) return;
  try {
    await restFetch('/registrations', 'DELETE', null, { 'Prefer': 'return=minimal' }, { id: 'eq.' + rowId });
    toast('已删除 ' + name + ' 的报名记录');
    loadAdminData();
  } catch (err) {
    toast('删除失败：' + (err.message || ''));
  }
}

async function clearAllData() {
  var count = STATE.allAdminData.length;
  if (!confirm('确定要清空所有报名数据吗？此操作不可撤销！')) return;
  if (!confirm('再次确认：真的要删除全部 ' + count + ' 条报名记录吗？')) return;
  try {
    for (var i = 0; i < STATE.allAdminData.length; i++) {
      await restFetch('/registrations', 'DELETE', null, { 'Prefer': 'return=minimal' }, { id: 'eq.' + STATE.allAdminData[i].id });
    }
    toast('已清空全部 ' + count + ' 条报名数据');
    loadAdminData();
  } catch (err) {
    toast('清空失败：' + (err.message || ''));
  }
}

// ==================== 工具函数 ====================
function esc(str) {
  var div = document.createElement('div');
  div.textContent = str || '';
  return div.innerHTML;
}

function toast(msg, duration) {
  var el = document.getElementById('toast');
  el.textContent = msg;
  el.style.display = 'block';
  el.style.animation = 'none';
  el.offsetHeight;
  el.style.animation = 'toastIn 0.3s ease';
  clearTimeout(el._t);
  el._t = setTimeout(function() { el.style.display = 'none'; }, duration || 3000);
}

// ==================== 启动 ====================
window.addEventListener('DOMContentLoaded', function() {
  var hash = window.location.hash.replace('#', '');
  if (hash && document.getElementById(hash)) {
    showPage(hash);
  } else {
    showPage('page-home');
  }
});

window.addEventListener('hashchange', function() {
  var hash = window.location.hash.replace('#', '');
  if (hash && document.getElementById(hash) && hash !== 'page-register') {
    showPage(hash);
  }
});

window.addEventListener('beforeunload', function(e) {
  if (STATE.formDirty && document.getElementById('page-register').classList.contains('active')) {
    e.preventDefault();
    e.returnValue = '您有未提交的报名信息，确定离开吗？';
    return e.returnValue;
  }
});
</script>

</body>
</html>
`; return new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8" } }); });