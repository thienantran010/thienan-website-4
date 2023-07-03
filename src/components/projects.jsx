import { Card, CardBody, Image, Stack, Heading, Text, Grid, GridItem} from '@chakra-ui/react';

function Media({ src, srcType, alt }) {
    return (
        srcType === "img" ? (
            <Image
            src={src}
            alt={alt}
            borderRadius='lg'
            w="200px"
            h="200px"
            margin="auto" />
        ) : (
            <video
            src={src}
            alt={alt}
            controls
            style={{
                width: "200px",
                height: "200px",
                margin: "auto"
            }} />
        )
    )
}

// change stack height for longer text!!!
function Project({ url, src, srcType, alt, title, year, desc}) {
    return (
            url ? (
                <a href={url}>
                    <Card maxW='sm'>
                        <CardBody>
                            <Media src={src} srcType={srcType} alt={alt}/>
                            <Stack mt='6' spacing='3' h={225} >
                                <Heading size='md'>{title}</Heading>
                                <Heading size='sm'>{year}</Heading>
                                <Text>{desc}</Text>
                            </Stack>
                        </CardBody>
                    </Card>
                </a>
            ) : (
                <Card maxW='sm'>
                    <CardBody>
                    <Media src={src} srcType={srcType} alt={alt}/>
                        <Stack mt='6' spacing='3' h={225}>
                            <Heading size='md'>{title}</Heading>
                            <Heading size='sm'>{year}</Heading>
                            <Text>{desc}</Text>
                        </Stack>
                    </CardBody>
            </Card>
            )
    );
}

export default function Projects( {projectList} ) {
    const projectComponentList = projectList.map(project => 
        <GridItem>
            <Project url={project.url ? project.url : null} 
                    src={project.src} 
                    srcType={project.srcType}
                    alt={project.alt}
                    title={project.title} 
                    year={project.year} 
                    desc={project.desc} />
        </GridItem>
    );

    return (
        <>
            <Heading textAlign="center" mb="20px">Projects</Heading>
            <Grid templateColumns="repeat(auto-fill, minmax(200px, 300px))" 
            columnGap="10px" rowGap="10px">{projectComponentList}</Grid>
        </>
    )

}