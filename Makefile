up:
	docker-compose up 

down: 
	docker-compose down

up-dev:
	docker-compose -f  docker-compose.yml -f  docker-compose.dev.yml up --build 

up-prod:
	docker-compose -f docker-compose.yml -f docker-compose.prod.yml up --build --force-recreate