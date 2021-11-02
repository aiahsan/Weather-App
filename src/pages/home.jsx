import React from 'react';
import { LogOut } from '../redux/actionMethodes/User/index'
import { useDispatch, useSelector } from 'react-redux';
import {useHistory,useLocation} from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { repository } from '../utiles/repository';
import moment from 'moment'
import _ from 'lodash'
import LoadingAnimation from '../animation/LoadingAnimation'
const useStyles = makeStyles({
  root: {
    width: 200,
    borderRadius: 9,
    boxShadow: '0px 9px 16px rgba(17, 17, 17, 0.08)',
    marginRight: 44,
    marginTop: '8%'
  },
  media: {
    height: 140,
    textAlign: 'left',
  },
  cardText: {
    position: 'relative',
    bottom: 0
  },

});
const RenderCard = ({ gradient, data }) => {
  const classes = useStyles();

  return <Card className={classes.root}>

    <CardActionArea>
      <CardMedia
        className={classes.media}
        style={{ background: gradient }}
        title="Contemplative Reptile"
      >
        <p className="mx-card-para-stl">{data && data.main && data.main.temp ? parseInt(data.main.temp - 273.15) : ""}<span>&#176;</span></p>
      </CardMedia>
      <CardContent>
        <p className="card-short-head" >
          {data && data.dt_txt ? moment(data.dt_txt).format("dddd") : ""}
        </p>

        <p className="date-heading" >
          {data && data.dt_txt ? moment(data.dt_txt).format("MMMM DD yyyy") : ""}
        </p>


      </CardContent>
    </CardActionArea>

  </Card>
}
export default () => {
  const Token = useSelector(x => x.Token);
  const User = useSelector(x => x.User);
  const history=useHistory();
  const location=useLocation();
  const dispatch = useDispatch();
  const [dataMain, setdataMain] = React.useState([]);
  const [showAnimation, setshowAnimation] = React.useState(false);
  const urlOpen=btoa("https://openweathermap.org");
  React.useEffect(() => {
    (async () => {
      setshowAnimation(true)
      const { data, status } = await repository.getData(User.city).then(x => x).then(x => x)
      console.log(status)
      if (status == 200) {
        setdataMain(_.take(data.list, 5));
        setshowAnimation(false)
      }
      else {
        setshowAnimation(false);
      }
    })()
  }, []);
  const handleLogout = () => {
    dispatch(LogOut())
  }
  
  return <div style={{ paddingTop: '10%', paddingLeft: '5%' }} >
    {showAnimation ? <LoadingAnimation /> : ""}
    <h3 className="head-welcome" style={{ textAlign: 'left' }}>Hi, {User.name}</h3>
    <p className="head-subtitle" style={{ textAlign: 'left' }}> Weather forecast: {User.city} for the next 5 days</p>

    <div>
      <div className="container d-flex justify-content-end">
        <button onClick={() => handleLogout()} className="btn btn-danger color-white mr-2">Log out</button>
        <button onClick={() =>window.location.href=atob(urlOpen)} className="btn btn-success color-white">Visit Open WeatherMap</button>
      </div>
      <div className="card-main">

        {
          dataMain.map((x, i) => <RenderCard key={i} data={x} gradient={i == 0 ? 'linear-gradient(114.44deg, #EB0055 0%, #F98820 100%)' : i == 1 ? "linear-gradient(114.44deg, #EF33FF 0%, #AE15AF 80.3%, #9E0D9B 100%)" : i == 2 ? "linear-gradient(114.44deg, #624AF2 0%, #50DDC3 100%)" : i == 3 ? "linear-gradient(114.44deg, #5F2EEA 0%, #C8B5FF 100%)" : "linear-gradient(114.44deg, #00E024 0%, #11C5A3 100%)"} />)
        }


      </div>
    </div>
  </div>
}