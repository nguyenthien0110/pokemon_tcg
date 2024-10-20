import { useEffect, useState } from 'react'
import axios from 'axios'
import { Bar } from 'react-chartjs-2'

interface Card {
  types: string[]
}

const ChartsPage = () => {
  const [typeCounts, setTypeCounts] = useState<{ [key: string]: number }>({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get('https://api.pokemontcg.io/v2/cards')
        const cards: Card[] = response.data.data
        const counts: { [key: string]: number } = {}

        cards.forEach((card: Card) => {
          card.types.forEach(type => {
            counts[type] = (counts[type] || 0) + 1
          })
        })

        setTypeCounts(counts)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchCards()
  }, [])

  const data = {
    labels: Object.keys(typeCounts),
    datasets: [
      {
        label: 'Number of Pokémon by Type',
        data: Object.values(typeCounts),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  }

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Pokémon Type Distribution</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className='w-[500px] h-[500px]'>
          {' '}
          <Bar data={data} options={{ responsive: true }} />
        </div>
      )}
    </div>
  )
}

export default ChartsPage
