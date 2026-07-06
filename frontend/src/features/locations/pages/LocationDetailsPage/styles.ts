import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 1440px;
`

export const BackLink = styled.button`
  align-self: flex-start;
  padding: 0;
  border: 0;
  background: transparent;
  color: #007c8c;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

export const Title = styled.h1`
  margin: 0;
  color: #141b2b;
  font-size: 24px;
  font-weight: 700;
`

export const Subtitle = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0;
  color: #6b7280;
  font-size: 14px;
`

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 16px;
`

export const StatCard = styled.div`
  padding: 16px 20px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  background: #ffffff;
`

export const StatValue = styled.strong`
  display: block;
  color: #141b2b;
  font-size: 28px;
`

export const StatLabel = styled.span`
  color: #6b7280;
  font-size: 13px;
`
