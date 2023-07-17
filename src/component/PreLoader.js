import React, {useEffect} from 'react'
import './preloader.css'
import { preLoaderAnim } from '../animations'

const PreLoader = () => {

    useEffect(() => {
        preLoaderAnim()
    }, [])
    return (
        <div className="preloader">
            <div className="texts-container">
                <span>Student, </span>
                <span>Programmer, </span>
                <span>Tutor.</span>
            </div>
        </div>
    )
}

export default PreLoader