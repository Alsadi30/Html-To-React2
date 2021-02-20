import Helmet from 'react-helmet'
import Route from './router'


function App() {
  return (
    <div className="App">
    <Helmet>
    <link rel="stylesheet" href="../assets/css/bootstrap.min.css" />
{/* <!-- Site css --> */}
<link rel="stylesheet" href="../assets/css/style.css" />
{/* <!-- responsive css --> */}
<link rel="stylesheet" href="../assets/css/responsive.css" />
{/* <!-- colors css --> */}
<link rel="stylesheet" href="../assets/css/colors1.css" />
{/* <!-- custom css --> */}
<link rel="stylesheet" href="../assets/css/custom.css" />
{/* <!-- wow Animation css --> */}
<link rel="stylesheet" href="../assets/css/animate.css" />
{/* <!-- revolution slider css --> */}
<link rel="stylesheet" type="text/css" href="revolution/css/settings.css" />
<link rel="stylesheet" type="text/css" href="revolution/css/layers.css" />
<link rel="stylesheet" type="text/css" href="revolution/css/navigation.css" />
        
    </Helmet>
    <Route/>
    
   
    </div>
  );
}

export default App;
