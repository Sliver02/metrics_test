import { mdiChevronDown, mdiChevronLeft, mdiChevronRight } from '@mdi/js';
import { StyledIcon, Title } from 'assets/globalStyles';
import Button from 'components/atoms/Button';
import Checkbox from 'components/atoms/CheckBox';
import { IMetric } from 'contexts/metricsContext';
import { ITable } from './interfaces';
import {
    StyledTable,
    Header,
    Content,
    Nav,
    NavBar,
    Records,
    Pagination,
    Row,
    ButtonWrapper,
    TitleWrapper,
} from './styled';

const Table = ({ title, data }: ITable) => {
    const MetricFrag = (metric: IMetric, i: number) =>
        !!metric && (
            <Row key={i}>
                <TitleWrapper>
                    <Checkbox label={metric?.code} />
                </TitleWrapper>
                <ButtonWrapper>
                    <Button label="View" />
                    <Button label="Edit" />
                </ButtonWrapper>
            </Row>
        );

    return (
        <StyledTable>
            <NavBar>
                <Title type="small">
                    <>{title}</>
                </Title>

                <Nav>
                    <Records>
                        <span>Page Records: 10</span> <StyledIcon path={mdiChevronDown} />
                    </Records>
                    <Pagination>
                        <StyledIcon path={mdiChevronLeft} />
                        <span>1 of 2</span>
                        <StyledIcon path={mdiChevronRight} />
                    </Pagination>
                </Nav>
            </NavBar>
            <Content>
                <Header></Header>
                {data?.map((metric: IMetric, i) => MetricFrag(metric, i))}
            </Content>
        </StyledTable>
    );
};

Table.defaultProps = {
    title: 'Table title',
};

export default Table;
