import React from 'react'
import styled from 'styled-components'

type buttonProps = {
	text: string
	variant: 'primary' | 'secondary'
}

type styleProps = {
	color: 'primary' | 'secondary'
}

const handleVariantType = (variant: string) => {
	switch (variant) {
		case 'primary':
			return 'color: #f3f3f3; background: #d30000;'
		case 'secondary':
			return 'color: #d30000; background: #f3f3f3;'
	}
}

const StyledButton = styled.button`
	background: transparent;
	outline: none;
	border: none;
	padding: 0.5rem 1rem;
	cursor: pointer;
	${({ color }: styleProps) => handleVariantType(color)};
`

const Button = ({ text, variant }: buttonProps) => (
	<StyledButton color={variant}>{text}</StyledButton>
)

export default Button
