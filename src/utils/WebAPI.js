/**
 * Created by ZhiLI on 2016/3/21.
 * Email: lizhipower@gmail.com
 */
import { receiveBlogs } from '../actions/BlogActions';
// import Promise from 'es6-promise';

export function ajaxBlog() {
  const fanfouBlogUrl = 'http://api.fanfou.com/statuses/user_timeline.json?id=fanfou';
  // const fanfouBlogPromise = Promise.resolve($.ajax(fanfouBlogUrl, 'GET'));
  // fanfouBlogPromise.then(receiveBlogs(blogs));
  console.log('ajaxBLOG FUNC');

  $.ajax({
    type: 'GET',
    url: fanfouBlogUrl,
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success(blogs) {
      console.log(blogs);
      receiveBlogs(blogs);
    }
  });
}
