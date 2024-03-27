import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

export default function OpenScreen({onClose}) {
    return (
        <div id="open-screen">
            <FontAwesomeIcon icon={faPlay} id="play-icon" onClick={onClose}/>
        </div>
    );
}

