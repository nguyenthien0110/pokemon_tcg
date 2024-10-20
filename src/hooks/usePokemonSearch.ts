import { useEffect, useState } from 'react'
import { getPokemonCardList, getPokemonCardById } from '../api/pokemonAPI'

export interface PokemonOption {
  id: string
  name: string
}

export interface CardData {
  id: string
  name: string
  hp: string
  types: string[]
  images: {
    large: string
  }
}

const usePokemonSearch = () => {
  const [cardOptions, setCardOptions] = useState<PokemonOption[]>([])
  const [selectedCard, setSelectedCard] = useState<PokemonOption | null>(null)
  const [cardData, setCardData] = useState<CardData | null>(null)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPokemonCardList()
        setCardOptions(data)
      } catch {
        setError('Failed to load card list.')
      }
    }
    fetchData()
  }, [])

  const handleSelect = async (option: PokemonOption | null) => {
    setSelectedCard(option)
    if (option) {
      try {
        const data = await getPokemonCardById(option.id)
        setCardData(data)
        setError('')
      } catch {
        setError('Card not found.')
        setCardData(null)
      }
    } else {
      setCardData(null)
    }
  }

  return {
    cardOptions,
    selectedCard,
    handleSelect,
    cardData,
    error,
  }
}

export default usePokemonSearch
