"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[607],{7607:function(n,e,i){i.r(e),i.d(e,{default:function(){return An}});var t,r,a,d,o,s,c,x,l,p,m,h,g,f,u,b,w,Z,j,y,v,k,C,z,N,A,F=i(5705),S=i(2797),_=i(5984),I=i(1686),L=i(1362),P=i(168),q=i(7402),M=q.Z.div(t||(t=(0,P.Z)(["\ndisplay: flex;\nflex-direction: row;\ntext-align: center;\npadding: 12px;\nmargin: 0;\n/* margin-right: 30px; */\nbackground: #fff;\nborder-radius: 8px;\nbox-shadow: 0 2px 0 0 #ebeffb; \n"]))),O=(0,q.Z)(F.l0)(r||(r=(0,P.Z)(["\ndisplay: flex;\nwidth: 1000px;\njustify-content: space-between;\n@media screen and (max-width: 1080px) {\n   width: 600px;\n    flex-direction: column;\n  align-items: center;\n  }; \n@media screen and (max-width: 680px) {\n   width: 320px;\n   align-items: center;\n  }; \n\n"]))),T=q.Z.div(a||(a=(0,P.Z)(["\n display: flex; \n flex-direction: row;\n margin-left: 10px;\n text-align: start;\n width: 100%;\n @media screen and (max-width: 680px) {\n   flex-direction: column;\n   align-items: center;\n  }; \n"]))),B=q.Z.label(d||(d=(0,P.Z)(["\n display: flex;\n flex-direction: column;\n width: 100%;\n font-weight: 500;\n :not(:last-child) {\n    margin-bottom: 20px;\n  }\n"]))),J=(0,q.Z)(F.gN)(o||(o=(0,P.Z)(["\nfont-size: 20px;\npadding: 5px 10px;\nmargin-top: 5px;\nmargin-right: 10px;\nborder: 2px solid #ccc;\nborder-radius: 5px;\noutline: none;\n:focus {\n    border-color: #4287f5;\n  }\n"]))),K=(0,q.Z)(F.Bc)(s||(s=(0,P.Z)(["\n  margin-top: 5px;\n  font-size: 14px;\n  color: red;\n"]))),R=q.Z.button(c||(c=(0,P.Z)(["\nborder: 1px solid #02bfae;\ntext-align: center;\npadding: 10px 20px;\nmargin: 15px; \nfont-size: 17px;\nfont-weight: 700;\nline-height: 27px;\nbackground: #5cc8bff9; \nborder-radius: 4px;\nbox-shadow: rgba(46, 191, 240, 0.4) 2px 2px;\nwhite-space: nowrap;\noverflow: hidden;\ncolor: white;\ntext-overflow: ellipsis;\ntransition: background-color .2s ease;\n outline: none;\n cursor: pointer;\n:hover {\n  box-shadow: #2c6cbb97 0 -25px 18px -14px inset,#79cfefb3 0 1px 2px;\n  transform: scale(1.05);\n}\n:not(:last-child) {\n    margin-right: 10px;\n  }\n"]))),E=q.Z.h1(x||(x=(0,P.Z)(["\npadding: 10px;\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\ncolor: #013370ec;\nfont-size: 20px;\nmargin: 0;\nmin-height: 30px;\nborder-radius: 8px 8px 0 0;\nwidth: 1000px;\nbackground-image: linear-gradient(-45deg,#a8e1ee,#c6eaec);\nbackground-image: linear-gradient(-45deg,#d7eef1,rgba(182, 235, 249, 0.989));\n@media screen and (max-width: 1080px) {\n   width: 600px;\n   margin: 0;\n  }; \n\n @media screen and (max-width: 680px) {\nmin-height: 50px;\nwidth: 320px; \nalign-items: center;\n  };\n"]))),G=q.Z.div(l||(l=(0,P.Z)(["\ndisplay: flex;\njustify-content: center;\nheight: 80px;\n"]))),V=i(9434),W=function(n){return n.contacts.items},$=function(n){return n.contacts.error},D=function(n){return n.filter.value},H=function(n){return n.filter.isOpen},Q=function(n){return n.contacts.operation},U=i(1641),X=i(8700),Y=i(3329),nn=S.Ry().shape({name:S.Z_().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name is not valid").required(),number:S.Z_().min(6).max(24).matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Phone number is not valid").required()}),en={id:"",name:"",number:""},tn=function(){var n=(0,V.v9)(W),e=(0,V.v9)(Q),i=(0,V.v9)(H),t=(0,V.I0)();return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(E,{children:"Add a new contact"}),(0,Y.jsx)(F.J9,{initialValues:en,validationSchema:nn,onSubmit:function(e,i){var r=i.resetForm;if(n.some((function(n){return n.name.toLowerCase()===e.name.toLowerCase()})))I.Notify.failure("".concat(e.name," is already in your contacts"));else{e.id=(0,_.x0)(10);var a={id:"id"+(0,_.x0)(),name:e.name,number:e.number};try{t((0,X.uK)(a)),I.Notify.success("".concat(e.name," was successfully added to  your contacts")),r()}catch(d){I.Notify.failure("Something went wrong")}}},children:(0,Y.jsx)(M,{children:(0,Y.jsxs)(O,{autoComplete:"off",children:[(0,Y.jsxs)(T,{children:[(0,Y.jsxs)(B,{htmlFor:"name",children:["Name",(0,Y.jsx)(J,{id:"name",type:"text",name:"name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"}),(0,Y.jsx)(K,{name:"name",component:"div"})]}),(0,Y.jsxs)(B,{htmlFor:"number",children:["Number",(0,Y.jsx)(J,{id:"number",type:"tel",name:"number",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"}),(0,Y.jsx)(K,{name:"number",component:"div"})]})]}),(0,Y.jsxs)(G,{children:[(0,Y.jsxs)(R,{type:"submit",children:[" ","add"===e?(0,Y.jsx)(L.a,{}):"Add contact"," "]}),(0,Y.jsx)(R,{type:"button",onClick:function(){t((0,U.vZ)())},isOpen:i,children:i?"Close filter":"Search"})]})]})})})]})},rn=i(6355),an=i(6036),dn=(0,q.Z)(rn.m3W)(p||(p=(0,P.Z)(["\npadding: 3px;\nborder: 1px solid black;\nborder-radius: 50%;\nmargin-right: 10px;\nfill: #5cc8bffb;\nfont-size: 20px;\n"]))),on=(0,q.Z)(an.OZs)(m||(m=(0,P.Z)(["\n fill: black; \n   font-size: 36px;\n  border-radius: 5px;\n  border: 2px solid #5cc8bf8a;\n   :hover {\n    fill: red;\n    border-color: red;\n  }\n"]))),sn=q.Z.li(h||(h=(0,P.Z)(["\ndisplay: flex;\njustify-content: space-between;\nwidth: 100%; \nalign-items: center;\n:not(:last-child) {\n    margin-bottom: 20px;\n    }\n    :hover {\n    color: #4287f5; \n    border-color: #4287f5;\n  }\n"]))),cn=q.Z.ul(g||(g=(0,P.Z)([" \ndisplay: flex;\nflex-direction: column; \npadding: 10px;\nalign-items: start;\n border-radius: 8px;\n background-color: white; \n margin: 0;\n @media screen and (max-width: 680px) {\nalign-items: center;\ntext-align: center;\n  };\n"]))),xn=q.Z.button(f||(f=(0,P.Z)(["\n  display: flex;\n  align-items: center;\n  border: none; \n  justify-content: center;\n  background-color: transparent;\n  transition: all 100ms linear;\n  cursor: pointer;\n"]))),ln=q.Z.h2(u||(u=(0,P.Z)(["\n padding: 10px;\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\ncolor: #013370ec;\nfont-size: 20px;\nmargin: 0;\nmin-height: 30px;\nborder-radius: 8px 8px 0 0;\nwidth: 980px;\nbackground-image: linear-gradient(-45deg,#a8e1ee,#c6eaec);\nbackground-image: linear-gradient(-45deg,#d7eef1,rgba(182, 235, 249, 0.989));\n@media screen and (max-width: 1080px) {\n   margin: 0;\n   width: 100%;\n  }; \n   @media screen and (max-width: 680px) {\nmin-height: 50px;\nalign-items: center;\n  };\n\n"]))),pn=q.Z.div(b||(b=(0,P.Z)(["\ndisplay: flex;\nflex-direction: column;\nwidth: 1000px; \nmargin-top: 30px;\npadding: 15px;\n@media screen and (max-width: 1080px) {\n   width: 600px;\n  align-items: center;\n  }; \n@media screen and (max-width: 680px) {\n   max-width: 340px;\n   align-items: center;\n  }; \n"]))),mn=q.Z.div(w||(w=(0,P.Z)(["\n  display: flex;\n  padding: 10px;\n  width: 100%; \n    text-align: start; \n  justify-content: flex-start;\n  align-items: center;\n   border-radius: 5px;\n    border: 2px solid #5cc8bf8a;;\n    height: 30px;\n    margin-right: 10px;\n"]))),hn=q.Z.div(Z||(Z=(0,P.Z)(["\n  display: flex;\n  padding: 16px;\n  width: 950px;\n  margin: 0;\n  justify-content: space-around;\n   align-items: flex-start; \n   border-radius: 10px;\n   margin-bottom: 5px;\n   background-color: #5cc8bf8a; \n   @media screen and (max-width: 1080px) {\n   width: 570px;\n  align-items: center;\n  }; \n@media screen and (max-width: 680px) {\n   max-width: 310px;\n   align-items: center;\n  }; \n"]))),gn=q.Z.span(j||(j=(0,P.Z)(["\n  font-weight: 700;\n  align-items: flex-start;\n\n"]))),fn=function(){var n=(0,V.I0)(),e=(0,V.v9)(W),i=(0,V.v9)(D),t=(0,V.v9)(Q),r=function(){var n=i.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))}();return(0,Y.jsxs)(pn,{children:[(0,Y.jsx)(ln,{children:" My contacts "}),r.length>0?(0,Y.jsxs)(cn,{children:[(0,Y.jsxs)(hn,{children:[(0,Y.jsx)(gn,{children:" Name: "}),(0,Y.jsx)(gn,{children:"Phone number: "})]}),r.map((function(e){var i=e.id,r=e.name,a=e.number;return(0,Y.jsxs)(sn,{children:[(0,Y.jsxs)(mn,{children:["   ",(0,Y.jsx)(dn,{})," ",r," "]}),(0,Y.jsxs)(mn,{children:[a," "]}),(0,Y.jsx)(xn,{onClick:function(){return function(e){try{n((0,X.GK)(e)),I.Notify.success("Contact was successfully removed from your phonebook")}catch(i){I.Notify.error("Something went wrong")}}(i)},children:t===i?(0,Y.jsx)(L.c,{}):(0,Y.jsx)(on,{})})]},i)}))]}):(0,Y.jsx)("p",{children:" There is no contacts \ud83e\udd37 "})]})},un=i(3853),bn=(0,q.Z)(un.jRj)(y||(y=(0,P.Z)(["\nfont-size: 18px; \nmargin: 0;\npadding: 10px;\ncolor: #5cc8bf;\nalign-items: center;\n"]))),wn=q.Z.div(v||(v=(0,P.Z)(["\n  text-align: start;\n  margin-top: 20px;\nbackground: #fff;\nborder-radius: 8px;\nbox-shadow: 0 2px 0 0 #ebeffb; \n"]))),Zn=q.Z.div(k||(k=(0,P.Z)(["\n  display: flex;\nalign-items: center;\n   @media screen and (max-width: 680px) {\nwidth: 320px; \n  };\n"]))),jn=q.Z.h2(C||(C=(0,P.Z)(["\npadding: 10px;\ndisplay: flex;\nalign-items: flex-start;\nflex-direction: column;\njustify-content: center;\ncolor: #013370ec;\nfont-size: 20px;\nmargin: 0;\nmin-height: 30px;\nborder-radius: 8px 8px 0 0;\nwidth: 1000px;\nbackground-image: linear-gradient(-45deg,#a8e1ee,#c6eaec);\nbackground-image: linear-gradient(-45deg,#d7eef1,rgba(182, 235, 249, 0.989));\n@media screen and (max-width: 1080px) {\n   width: 600px;\n   margin: 0;\n  }; \n\n @media screen and (max-width: 680px) {\nmin-height: 50px;\nwidth: 320px; \nalign-items: center;\n  };\n"]))),yn=q.Z.input(z||(z=(0,P.Z)(["\nfont-size: 20px;\npadding: 5px 10px;\nmargin-bottom: 10px;\nmargin-top: 10px;\nmargin-right: 10px;\nborder: 2px solid #ccc;\nborder-radius: 5px;\noutline: none;\nwidth: 320px; \n:focus {\n    border-color: #4287f5;\n  }\n   @media screen and (max-width: 680px) {\nwidth: 100%; \n  };\n"]))),vn=function(){var n=(0,V.I0)(),e=(0,V.v9)(D);return(0,Y.jsxs)(wn,{children:[(0,Y.jsx)(jn,{children:"Find a contact by name "}),(0,Y.jsxs)(Zn,{children:[(0,Y.jsx)(bn,{})," ",(0,Y.jsx)(yn,{onChange:function(e){n((0,U.Tv)(e.currentTarget.value))},name:"filter",type:"text",value:e})]})]})},kn=q.Z.div(N||(N=(0,P.Z)(["\ndisplay: flex;\nflex-grow: 1;\nflex-basis: 0;\nflex-direction: column; \nalign-items: flex-start;\npadding: 30px; \nborder-radius: 5px;\nmargin: 5px;\n@media screen and (max-width: 1080px) {\n  align-items: center;\n  }\n"]))),Cn=q.Z.h1(A||(A=(0,P.Z)(["\ntext-align: center;\n"]))),zn=i(2791),Nn=i(4270),An=function(){var n=(0,V.v9)(H),e=(0,V.v9)($),i=(0,V.v9)(Q),t=(0,V.I0)();return(0,zn.useEffect)((function(){t((0,X.yF)())}),[t]),(0,Y.jsxs)(kn,{children:[(0,Y.jsx)(Nn.q,{children:(0,Y.jsx)(Cn,{children:" My Contacts "})}),(0,Y.jsx)(tn,{}),n&&(0,Y.jsx)(vn,{}),"fetch"!==i||e?(0,Y.jsx)(fn,{}):(0,Y.jsx)(L.a,{}),e&&(0,Y.jsx)("div",{children:" Something went wrong! Please try again! "})]})}}}]);
//# sourceMappingURL=607.daaecbd9.chunk.js.map