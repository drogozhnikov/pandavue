<template>
  <input class="open" id="top-box" type="checkbox" hidden>
  <label class="btn" for="top-box"></label>
  <div class="top-panel">
    <div class="message">
      Some Shit
    </div>
  </div>
</template>

<script>
export default {
  name: "SlidingPanelTop"
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box
}

body {
  background: #d0d0d0;
  background: -webkit-linear-gradient(90deg,#abbaab 10%,#fff 90%);
  background: -moz-linear-gradient(90deg,#abbaab 10%,#fff 90%);
  background: -ms-linear-gradient(90deg,#abbaab 10%,#fff 90%);
  background: -o-linear-gradient(90deg,#abbaab 10%,#fff 90%);
  background: linear-gradient(90deg,#abbaab 10%,#fff 90%);
  font-size: 100%;
  font-family: "Roboto",Helvetica,Sans-serif
}

h1 {
  font-weight: 300;
  font-size: 175%;
  color: #191919;
  -webkit-font-smoothing: antialiased
}

h2 {
  font-weight: 300;
  font-size: 130%;
  color: #888;
  padding: 5px 0
}

.info {
  margin: 50px auto;
  text-align: center
}

.info a {
  text-decoration: none;
  color: #016993
}

.info a:hover {
  color: #ad8c02
}
.fa {
  color: #fd6969
}
@media only screen and (max-width: 400px) {
  body {
    font-size: 90%
  }
}

@media only screen and (max-width: 800px) {
  body {
    font-size: 100%
  }
}

@media only screen and (min-width: 1100px) {
  body {
    font-size: 120%
  }
}
/*  ===== ������������� ������� ������
*   =========================================
*   ������� ��������� ��������� ������ */
.top-panel {
  background: #39464e;
  position: absolute;
  top: -250px;
  left: 0;
  width: 100%;
  height: 250px;
  padding: 0;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);
  transition: top 400ms cubic-bezier(0.17,0.04,0.03,0.94)
}
/* ���� ��������� */
.message {
  color: #fff;
  font-weight: 300;
  position: relative;
  padding: 3em 2em;
  margin: 0 auto;
  max-width: 980px
}
/* ��������� 1 ������ */
.message h1 {
  color: #fff
}
/* ��������� 2 ������ */
.message h2 {
  color: #888
}
.message p {
  margin: 1em 0
}
.message a {
  text-decoration: none;
  color: #748b74
}
.message a:hover {
  color: #95984b
}
/* ������������� ������ */
label.btn {
  display: block;
  position: absolute;
  right: 120px;
  top: 50px;
  cursor: pointer;
  background: #2bbbad;
  width: 50px;
  border-radius: 0 0 5px 5px;
  padding: 8px 5px;
  color: #FFF;
  line-height: 20px;
  font-size: 12px;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  cursor: pointer;
  transition: all 400ms cubic-bezier(0.17,0.04,0.03,0.94);
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);
  z-index: 9999
}
/* ������������� ��� ��������� */
label.btn:hover {
  box-shadow: 0 5px 11px 0 rgba(0,0,0,0.18),0 4px 15px 0 rgba(0,0,0,0.15)
}
/* ������� ������������� ���� */
label.btn:after {
  content: '\f078';
  font: normal 18px/1 FontAwesome;
  text-decoration: inherit
}
/* ��������� ������ */
.open:checked ~ .top-panel {
  top: 0
}

.open:checked ~ label.btn {
  top: 250px
}
/* �������� ���������� �������� �������� */
.open:checked ~ .container {
  margin-top: 300px
}
/* ���� ������������� ��� ����� */
.open:checked + label.btn {
  background: #dd6149
}
/* ������� ������������� �����*/
.open:checked + label.btn:after {
  content: '\f077';
  font: normal 18px/1 FontAwesome
}
/* ��������� �������� */
.container {
  max-width: 980px;
  margin: 0 auto;
  text-align: center;
  transition: margin 400ms cubic-bezier(0.17,0.04,0.03,0.94);
  padding: 5em 3em
}
</style>