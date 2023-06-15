import Safe from 'react-safe';

const Comment = () => {
  return (
    <>
      <div id="disqus_thread" className="mt-5"></div>
      <Safe.script>
        {(function () {
          // DON'T EDIT BELOW THIS LINE
          var d = document,
            s = d.createElement('script');
          s.src = 'https://maribaca-1.disqus.com/embed.js';
          s.setAttribute('data-timestamp', +new Date());
          (d.head || d.body).appendChild(s);
        })()}
      </Safe.script>
    </>
  );
};

export default Comment;
