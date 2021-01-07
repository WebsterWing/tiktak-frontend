import { io } from 'socket.io-client'
import API from './API'


const socket = io(API.api_link)

export default socket