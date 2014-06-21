

# test TaskRepository.prototype.findAll()
	curl http://localhost:8000/tasks/


# test TaskRepository.prototype.find(:id)
	curl http://localhost:8000/tasks/1
	curl http://localhost:8000/tasks/2
	curl http://localhost:8000/tasks/3


# Save a task (create or update)
# test TaskRepository.prototype.save(:task)

curl \
	-H "Content-Type: application/json" \
	-d '{"taskId":"100","title":"testing HTTP.POST using curl"}' \
	http://localhost:8000/tasks/


curl -i \
    -H "Accept: application/json" \
    -H "X-HTTP-Method-Override: PUT" \
    -X POST \
    -d taskId:"101",title:"testing HTTP.PUT using curl",description:"data from curl commandline",status:"success if you see me :-) " \
    http://localhost:8000/tasks/



# test TaskRepository.prototype.remove(:id)
curl -X DELETE "http://localhost:8000/tasks/1"





