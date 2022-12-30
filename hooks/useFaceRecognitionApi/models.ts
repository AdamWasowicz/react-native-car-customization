// Response
export interface failResponse {
    message: string,
    status: string
}

export interface loginWithTextResponse {
    auth_token: string,
    message: string,
    status: string,
}

export interface loginWithPhotoResponse {
    auth_token: string,
    message: string,
    status: string,
}

export interface registerResponse {
    auth_token: string,
    message: string,
    status: string,
}

export interface postSettingsResponse {
    data: carSettingsModel,
    status: string,
}

export interface getSettingsResponse {
    data: carSettingsModel,
    status: string,
}


// Payload
export interface loginWithTextPayload {
    email: string,
    password: string,
}

export interface loginWithPhotoPayload {
    image: string
}

export interface registerPayload {
    email: string,
    password: string,
    image: string
}

export interface carSettingsModel {
    driverSeatTilt: number,
    passengerSeatTilt: number,
    driverMirrorTiltX: number,
    driverMirrorTiltY: number,
    passengerMirrorTiltX: number,
    passengerMirrorTiltY: number
}