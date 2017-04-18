import redis from 'redis';

const client = redis.createClient('redis://h:p62b3ef0574227f4fa802afd6678554ddf58836c317244e7a0174755484312087@ec2-34-206-56-30.compute-1.amazonaws.com:47819');

export default client;
