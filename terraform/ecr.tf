resource "aws_ecr_repository" "order_service" {
  name                 = "order-service"
  image_tag_mutability = "MUTABLE"
  force_delete         = true # Allows destroying repo even if it has images (good for learning)

  image_scanning_configuration {
    scan_on_push = true
  }
}

resource "aws_ecr_repository" "product_service" {
  name                 = "product-service"
  image_tag_mutability = "MUTABLE"
  force_delete         = true

  image_scanning_configuration {
    scan_on_push = true
  }
}

resource "aws_ecr_repository" "cart_service" {
  name                 = "cart-service"
  image_tag_mutability = "MUTABLE"
  force_delete         = true

  image_scanning_configuration {
    scan_on_push = true
  }
}

# Output the repository URLs so we can use them later
output "ecr_repo_urls" {
  value = {
    order   = aws_ecr_repository.order_service.repository_url
    product = aws_ecr_repository.product_service.repository_url
    cart    = aws_ecr_repository.cart_service.repository_url
  }
}