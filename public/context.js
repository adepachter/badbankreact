const Route       = ReactRouterDOM.Route;
const Link        = ReactRouterDOM.Link;
const HashRouter  = ReactRouterDOM.HashRouter;
const UserContext = React.createContext(null);


//firebase add
      // Your web app's Firebase configuration
      var firebaseConfig = {
        apiKey: "AIzaSyDRP7931TNDe4vGS7mMEhbOLWPntmfb-Pg",
        authDomain: "badbankreact.firebaseapp.com",
        projectId: "badbankreact",
        storageBucket: "badbankreact.appspot.com",
        messagingSenderId: "985744499226",
        appId: "1:985744499226:web:3de6e13f0856ac0425a7a3"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);


function Card(props){
  function classes(){
    const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
    const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
    return 'card mb-3 ' + bg + txt;
  }

  return (
    <div className={classes()} style={{maxWidth: "18rem"}}>
      <div className="card-header">{props.header}</div>
      <div className="card-body">
        {props.title && (<h5 className="card-title">{props.title}</h5>)}
        {props.text && (<p className="card-text">{props.text}</p>)}
        {props.body}
        {props.status && (<div id='createStatus'>{props.status}</div>)}
      </div>
    </div>      
  );    
}


function SuccessMSG(props) {
  
}