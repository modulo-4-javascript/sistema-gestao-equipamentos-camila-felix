import { Alert, Card, Descriptions, Empty, List, Spin, Table, Tag } from 'antd'
import type { TableProps } from 'antd'
import { useNavigate, useParams } from 'react-router-dom'
import { AppLayout } from '../../../../app/layout/AppLayout'
import {
  formatEquipmentDate,
  getEquipmentStatusLabel,
  getEquipmentTypeLabel,
  type Equipment,
} from '../../../equipment/types/equipment'
import { useLocationDetails } from '../../hooks/useLocationDetails'
import { useLocationEquipment } from '../../hooks/useLocationEquipment'
import { useLocationHistory } from '../../hooks/useLocationHistory'
import {
  formatLocationDate,
  getLocationStatusLabel,
  getLocationTypeLabel,
  type LocationHistoryItem,
} from '../../types/location'
import {
  BackLink,
  CardsGrid,
  Container,
  Header,
  StatCard,
  StatLabel,
  StatValue,
  Subtitle,
  Title,
} from './styles'

// Colunas da tabela de equipamentos vinculados à localização.
const equipmentColumns: TableProps<Equipment>['columns'] = [
  {
    title: 'Equipamento',
    dataIndex: 'name',
    key: 'name',
    render: (_, equipment) => (
      <span>
        <strong>{equipment.name}</strong>
        <br />
        <small>{equipment.code}</small>
      </span>
    ),
  },
  {
    title: 'Tipo',
    dataIndex: 'type',
    key: 'type',
    render: (type: Equipment['type']) => getEquipmentTypeLabel(type),
  },
  {
    title: 'Situação',
    dataIndex: 'status',
    key: 'status',
    render: (status: Equipment['status']) => (
      <Tag>{getEquipmentStatusLabel(status)}</Tag>
    ),
  },
]

export function LocationDetailsPage() {
  const { locationId } = useParams()
  const navigate = useNavigate()

  // Três hooks de leitura: dados do local, equipamentos vinculados e histórico.
  const locationQuery = useLocationDetails(locationId)
  const equipmentQuery = useLocationEquipment(locationId)
  const historyQuery = useLocationHistory(locationId)

  const location = locationQuery.data
  const equipments = equipmentQuery.data?.data ?? []
  const history = historyQuery.data?.data ?? []

  return (
    <AppLayout currentPage="Localizações">
      <Container>
        <BackLink type="button" onClick={() => navigate('/locations')}>
          ← Voltar para localizações
        </BackLink>

        {locationQuery.isLoading && <Spin />}

        {locationQuery.errorMessage && (
          <Alert
            showIcon
            type="error"
            message="Erro ao carregar a localização"
            description={locationQuery.errorMessage}
          />
        )}

        {!locationQuery.isLoading &&
          !locationQuery.errorMessage &&
          !location && <Empty description="Localização não encontrada." />}

        {location && (
          <>
            <Header>
              <Title>{location.name}</Title>
              <Subtitle>
                {location.code}
                <Tag>{getLocationStatusLabel(location.status)}</Tag>
              </Subtitle>
            </Header>

            <Card title="Informações gerais">
              <Descriptions column={{ xs: 1, sm: 2 }} bordered size="small">
                <Descriptions.Item label="Tipo">
                  {getLocationTypeLabel(location.type)}
                </Descriptions.Item>
                <Descriptions.Item label="Situação">
                  {getLocationStatusLabel(location.status)}
                </Descriptions.Item>
                <Descriptions.Item label="Prédio">
                  {location.building ?? 'Não informado'}
                </Descriptions.Item>
                <Descriptions.Item label="Andar">
                  {location.floor ?? 'Não informado'}
                </Descriptions.Item>
                <Descriptions.Item label="Sala">
                  {location.room ?? 'Não informado'}
                </Descriptions.Item>
                <Descriptions.Item label="Atualizado em">
                  {formatLocationDate(location.updatedAt)}
                </Descriptions.Item>
                <Descriptions.Item label="Descrição" span={2}>
                  {location.description ?? 'Não informado'}
                </Descriptions.Item>
              </Descriptions>
            </Card>

            <CardsGrid>
              <StatCard>
                <StatValue>{location.equipmentSummary.total}</StatValue>
                <StatLabel>Equipamentos</StatLabel>
              </StatCard>
              <StatCard>
                <StatValue>{location.equipmentSummary.available}</StatValue>
                <StatLabel>Disponíveis</StatLabel>
              </StatCard>
              <StatCard>
                <StatValue>{location.equipmentSummary.inMaintenance}</StatValue>
                <StatLabel>Em manutenção</StatLabel>
              </StatCard>
              <StatCard>
                <StatValue>{location.equipmentSummary.inactive}</StatValue>
                <StatLabel>Inativos</StatLabel>
              </StatCard>
            </CardsGrid>

            <Card title="Equipamentos vinculados">
              <Table
                columns={equipmentColumns}
                dataSource={equipments}
                loading={equipmentQuery.isLoading}
                rowKey="id"
                pagination={false}
                locale={{ emptyText: 'Nenhum equipamento vinculado.' }}
              />
            </Card>

            <Card title="Histórico de movimentações">
              {historyQuery.errorMessage ? (
                <Alert
                  showIcon
                  type="error"
                  message={historyQuery.errorMessage}
                />
              ) : (
                <List
                  loading={historyQuery.isLoading}
                  dataSource={history}
                  locale={{ emptyText: 'Nenhuma movimentação registrada.' }}
                  renderItem={(item: LocationHistoryItem) => (
                    <List.Item>
                      <List.Item.Meta
                        title={item.title}
                        description={item.description}
                      />
                      <span>{formatEquipmentDate(item.createdAt)}</span>
                    </List.Item>
                  )}
                />
              )}
            </Card>
          </>
        )}
      </Container>
    </AppLayout>
  )
}
