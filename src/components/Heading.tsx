// This component represents a heading, utilizing the heading tag and allowing for a placeholder to be inserted.
type HeadingProps = {
    children: string;
};

export const Heading = (props: HeadingProps) => {
    return <h2>{props.children}</h2>;
};
