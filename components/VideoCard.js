import styles from '../styles/VideoCard.module.css';

export default function VideoCard(props) {
    function relativeDays(timestamp) {
        const rtf = new Intl.RelativeTimeFormat('en', {
            numeric: 'auto',
        });
        const oneDayInMs = 1000 * 60 * 60 * 24;
        const daysDifference = Math.round(
            (timestamp - new Date().getTime()) / oneDayInMs,
        );

        return rtf.format(daysDifference, 'day');
    }
    function nFormatter(num, digits) {
        const lookup = [
            { value: 1, symbol: "" },
            { value: 1e3, symbol: "k" },
            { value: 1e6, symbol: "M" },
            { value: 1e9, symbol: "G" },
            { value: 1e12, symbol: "T" },
            { value: 1e15, symbol: "P" },
            { value: 1e18, symbol: "E" }
        ];
        const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
        var item = lookup.slice().reverse().find(function(item) {
            return num >= item.value;
        });
        return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
    }

    return (
        <div>
            <div className={styles.Container}>
                <img className={styles.image} src={props.video.snippet.thumbnails.medium.url} alt="thumbnail" />
           <span className={styles.TitleContainer}>    <img className={styles.ChannelImage} src={props.video.snippet.thumbnails.medium.url} />
                <div className={styles.title}>{props.video.snippet.title}</div>
               </span>
                <div className={styles.ChannelName}>{props.video.snippet.channelTitle}</div>
                <div className={styles.views}>{nFormatter(props.video.statistics.viewCount,2) } views • { relativeDays(new Date (props.video.snippet.publishedAt))}</div>

            </div>
        </div>
    )
}