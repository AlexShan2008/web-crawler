/**
 * Created by ShanGuo on 2017/6/18.
 */
/**
 * debug 会根据环境变量变化，执行命令，向控制台输出1条日志；
 * 输出日志时候会进行判断；判断日志记录器的名称与环境变量中的debug值是否匹配。不匹配则不输出日志；
 * cmd set DEBUG = loggerA
 * export DEBUG = loggerA 是Linux和Mac下设置环境变量的方式；
 *
 * 开发时候需要调试，输出debug，上线就不需要显示debug日志；可以采用才方法，配置本机环境变量即可，不用更改代码。
 *
 * 只针对当前打开的命令行窗口有效。
 * @type {*}
 */
const debug = require('debug');
//传入一个名称，返回debug的实例；
let loggerA = debug('loggerA');//需要loggerA 和电脑配置的环境变量相同； cmd set DEBUG = loggerA  ；  logger*匹配所有的logger
let loggerB = debug('loggerBName');

loggerA('loggerA');