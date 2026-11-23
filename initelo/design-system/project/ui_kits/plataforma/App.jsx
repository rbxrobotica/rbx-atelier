(function(){
function App(){
  const [tela,setTela]=React.useState(window.INI_TELA||'curso');
  const go=t=>{setTela(t);window.scrollTo(0,0);};
  if(tela==='aula')return <window.LessonPage go={go}/>;
  if(tela==='exercicio')return <window.ExercisePage go={go}/>;
  return <window.CoursePage go={go}/>;
}
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
})();
