import { Card, CardBody, Image, Stack, Heading, Text, Grid, GridItem, Center} from '@chakra-ui/react';

function Project({ url, img_src, alt, title, year, desc}) {
    return (
        <div className="project-container">
            {url ? (
                <a href={url}>
                    <Card maxW='sm' maxWidth="300px" mb="10px">
                        <CardBody>
                            <Image
                            src={img_src}
                            alt={alt}
                            borderRadius='lg'
                            w="200px"
                            h="200px"
                            margin="auto"
                            />
                            <Stack mt='6' spacing='3' h="150px" >
                                <Heading size='md'>{title}</Heading>
                                <Heading size='sm'>{year}</Heading>
                                <Text>{desc}</Text>
                            </Stack>
                        </CardBody>
                    </Card>
                </a>
            ) : (
                <Card maxW='sm' maxWidth="300px" mb="10px">
                    <CardBody>
                        <Image
                        src={img_src}
                        alt={alt}
                        borderRadius='lg'
                        w="200px"
                        h="200px"
                        margin="auto"
                        />
                        <Stack mt='6' spacing='3' h="150px">
                            <Heading size='md'>{title}</Heading>
                            <Heading size='sm'>{year}</Heading>
                            <Text>{desc}</Text>
                        </Stack>
                    </CardBody>
            </Card>
            )}
        </div>
    );
}

export default function Projects( {projectList} ) {
    const projectComponentList = projectList.map(project => 
        <GridItem>
            <Project url={project.url ? project.url : null} 
                    img_src={project.img_src} 
                    alt={project.alt}
                    title={project.title} 
                    year={project.year} 
                    desc={project.desc}></Project>
        </GridItem>
    );

    return (
        <>
            <Heading textAlign="center" mb="20px">Projects</Heading>
            <Grid templateColumns="repeat(auto-fill, minmax(200px, 300px))" justifyContent="center" columnGap="10px">{projectComponentList}</Grid>
        </>
    )

}