import React, {useState} from 'react';


const useCarSettingsPage = () => {

    const [driverSeatTilt, setDriverSeatTilt] = useState<number>(90);


    const handleDriverSeatTiltChange = (value: number) => {
        setDriverSeatTilt(value);
    }

    return {
        driverSeatTilt, handleDriverSeatTiltChange
    }
}

export default useCarSettingsPage;