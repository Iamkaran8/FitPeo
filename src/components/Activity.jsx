import {Chart} from 'chart.js/auto';
import {Bar} from 'react-chartjs-2';
const Activity = () => {
  return (
    <>
    <div className="d-flex align-items-start justify-content-between">
    <h4>Activity</h4>
    <button className="btn btn-secondary rounded">week</button>
    </div>
    <div className='Bar-chart' style={{height:'90%'}}>
    <Bar
      data={{labels:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        datasets:[
          {
            label:"Sales",
            data:[1700,400,700,1600,100,660,900]
          }
        ]
      }}
      />
      </div>
    </>
  )
}

export default Activity