import mitt from 'mitt';

const bus = mitt();

export default bus;

/**
 使用方法
 *
 * 使用方
 * import bus from '@/bus/bus.ts'
 *
 * bus.emit('changeName', 'hello world')
 *
 * 接收方
 * import bus from '@/bus/bus.ts'
 *
 * bus.on('changeName', (key) => {
 *   console.log('name', key);
 * })
 *
 *
 * */
