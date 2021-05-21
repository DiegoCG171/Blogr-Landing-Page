
interface Props {
    title: string;
    buttonStyle?: 'primary' | 'outline' | 'gradient';
    buttonSize?: 'wide';
}


export const Button = ({ title, buttonStyle, buttonSize }: Props) => {

    let checkStyle: string = '';
    let checkSize: string = '';

    (buttonStyle !== undefined)  &&  (checkStyle = `btn--${buttonStyle}` );
    (buttonSize !== undefined) && (checkSize = `btn--${buttonSize}`);

    return(
        <button className={ `btn ${checkStyle} ${checkSize}` }>
            {title}
        </button>
    )
}
