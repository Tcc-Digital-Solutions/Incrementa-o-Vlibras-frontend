import '../../assets/css/css_universal/BoxYoutube.css'
import YouTube from 'react-youtube';

export const BoxYoutube = (props) => {


    return (
        <div className="box-youtube-div" >
            <YouTube className='box-youtube-button-youtube' videoId={props.youtube} host='https://www.youtube.com'/>
        </div>
    )
}
