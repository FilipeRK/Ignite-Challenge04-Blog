import { useEffect, useRef } from 'react';

import styles from './comment.module.scss';

export default function Comments(): JSX.Element {
  const commentBox = useRef<HTMLDivElement>();

  useEffect(() => {
    const scriptEl = document.createElement('script');

    scriptEl.setAttribute('src', 'https://utteranc.es/client.js');
    scriptEl.setAttribute('crossorigin', 'anonymous');
    scriptEl.setAttribute('async', 'true');
    scriptEl.setAttribute('repo', 'FilipeRK/Ignite-Challenge05-SpaceTraveling');
    scriptEl.setAttribute('issue-term', 'pathname');
    scriptEl.setAttribute('theme', 'github-dark');

    commentBox.current.appendChild(scriptEl);
  }, []);

  return <div ref={commentBox} id="comments" className={styles.container} />;
}