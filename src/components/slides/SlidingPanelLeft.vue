<template>
  <input class="open" id="top-box" type="checkbox" hidden>
  <label class="btn" for="top-box"></label>
  <div class="left-panel">
    <div class="panda-btn">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "SlidingPanelLeft",
  components: {}
}
</script>

<style scoped>
.panda-image{
  width: 100%;
  /*max-height: 80px;*/
}
.panda-btn{
  display: grid;
  grid-template-columns: 1fr;
}
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
.left-panel {
  background: #39464e;
  position: absolute;
  left: -250px;
  top: 0px;
  /*height: 400px;*/
  width: 250px;
  padding: 0;
  border-radius: 0 5px 5px 0;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);
  transition: left 400ms cubic-bezier(0.17,0.04,0.03,0.94)
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
  left: 0px;
  top: 3px;
  cursor: pointer;
  background:url("../../assets/panda-hello-cute-contur.png");
  background-size: 100px;
  width: 100px;
  height: 40px;
  border-radius: 0 5px 5px 0;
  padding: 8px 5px;
  color: #FFF;
  line-height: 30px;
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

/*label.btn:after {*/
/*  content: '\f078';*/
/*  font: normal 18px/1 FontAwesome;*/
/*  text-decoration: inherit*/
/*}*/

/* ��������� ������ */
.open:checked ~ .left-panel {
  left: 0
}

/*������� � �������� ���������*/
.open:checked ~ label.btn {
  left: 250px
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